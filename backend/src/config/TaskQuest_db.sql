-- Database: taskquest_db

-- DROP DATABASE IF EXISTS taskquest_db;

/*
CREATE DATABASE taskquest_db
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'C'
    LC_CTYPE = 'C'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

*/ 

-- Création des utilisateurs 

	CREATE TABLE users(
		id UUID PRIMARY KEY default gen_random_uuid(),
		firstname VARCHAR(50) UNIQUE NOT NULL,
		lastname VARCHAR(50) UNIQUE NOT NULL,
		email VARCHAR(255) UNIQUE NOT NULL,
		password VARCHAR(255) NOT NULL,
		created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
		updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
	);

	-- Table pour les associations 

	CREATE TABLE association(
		id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
		name VARCHAR(255) UNIQUE NOT NULL,
		description TEXT,
		invite_code VARCHAR(50) UNIQUE NOT NULL,
		created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
		updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
	);

	-- Table sur les rôles des membres

	CREATE TABLE membership(
		id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
		user_id UUID REFERENCES users(id) ON DELETE CASCADE,
		association_id UUID REFERENCES association(id) ON DELETE CASCADE,
		role VARCHAR(50) DEFAULT 'Member' CHECK (role IN('Président','Bureau_Restreint', 'Bureau_Etendu','Member')),
		joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
		UNIQUE(user_id,association_id)
	);

	-- Table des tâches à effectuer

	CREATE TABLE tasks(
		id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
		title VARCHAR(50) UNIQUE NOT NULL,
		description TEXT,
		is_completed BOOLEAN DEFAULT FALSE,
		niveau INTEGER DEFAULT 1,
		due_date TIMESTAMP,
		assigned_to_id UUID REFERENCES users(id) ON DELETE SET NULL,
		association_to_id UUID REFERENCES association(id) ON DELETE CASCADE,
		parent_task_id UUID REFERENCES tasks(id) ON DELETE CASCADE,
		create_by_id UUID REFERENCES users(id) ON DELETE CASCADE,
		created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
		updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
	);

		-- Indexation 

		CREATE INDEX idx_tasks_assigned_to ON tasks(assigned_to_id);
		CREATE INDEX idx_tasks_association ON tasks(association_to_id);
		CREATE INDEX idx_memberships_user on membership(user_id);


	SELECT * FROM tasks




	-- Insertion de personnes (test)


	INSERT INTO users(firstname,lastname,email,password) VALUES 
	('Yanis','MEZIANE','yanis.meziane@efrei.net', 'user1'),
	('Vincent-Xavier','DUROU-GUILLEM','vincent-xavier.durou-guillem@efrei.net','user2'),
	('Sven', 'BERNARD','sven.bernard@efrei.net','user3');

	SELECT * FROM association;

	INSERT INTO association(name,description,invite_code)VALUES
	('Bureau Des Arts', 'Association Artistiques', 'PiliersRPZ'),
	('Asian Efrei', 'Association sur la culture asiatique', 'leVgang'),
	('Scène Efreinée', 'Association de théâtre', 'Oof');

	SELECT * from membership;

	INSERT INTO membership(user_id, association_id,role) VALUES
	((SELECT id FROM users WHERE email = 'yanis.meziane@efrei.net'), (SELECT id FROM association WHERE name = 'Bureau Des Arts'), 'Président'),
	((SELECT id FROM users WHERE email = 'vincent-xavier.durou-guillem@efrei.net'), (SELECT id FROM association WHERE name = 'Asian Efrei'), 'Bureau_Restreint'),
	((SELECT id FROM users WHERE email = 'sven.bernard@efrei.net'), (SELECT id FROM association WHERE name = 'Scène Efreinée'),'Member');


	-- Insertion des tâches à effectuer 

	SELECT * from tasks;

	INSERT INTO tasks(title,description,association_to_id,create_by_id,assigned_to_id)VALUES 
	('Contacter Peggy','Organisation évent sur le campus', (SELECT id FROM association WHERE name = 'Bureau Des Arts'), (SELECT id FROM users WHERE email = 'yanis.meziane@efrei.net'),(SELECT id FROM users WHERE email = 'yanis.meziane@efrei.net'));


	-- Partie des tâches 

	-- Voir toutes les tâches d'un utilisateur
SELECT t.title, t.description, t.is_completed, a.name as association_name
FROM tasks t
JOIN association a ON t.id = a.id
WHERE t.assigned_to_id = (SELECT id FROM users WHERE email = 'yanis.meziane@efrei.net');

SELECT * FROM association;
SELECT * FROM users;
SELECT * FROM tasks;

-- Voir la progression des tâches d'une association


SELECT 
    u.firstname as assigned_to,
    t.title,
    t.is_completed,
    t.niveau
FROM tasks t
JOIN users u ON t.assigned_to_id = u.id
JOIN association a ON t.association_to_id = a.id
WHERE a.name = 'Bureau Des Arts'
ORDER BY t.niveau, t.created_at;

-- Marquer une tâche comme terminée

UPDATE tasks 
SET is_completed = TRUE, updated_at = CURRENT_TIMESTAMP 
WHERE title = 'Contacter Peggy';

SELECT * FROM tasks;
		
	