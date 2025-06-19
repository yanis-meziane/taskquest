
const pool = require('../config/database');
const bcrypt = require('bcryptjs');

class User {
  static async create({ email, password, firstname, lastname }) {
    try {
      const hashedPassword = await bcrypt.hash(password, 12);
      
      const query = `
        INSERT INTO users (firstname, lastname, email, password, created_at)
        VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP)
        RETURNING id, firstname, lastname, email, created_at
      `;
      
      const result = await pool.query(query, [firstname, lastname, email, hashedPassword]);
      return result.rows[0];
    } catch (error) {
      console.error('Erreur lors de la création de l\'utilisateur:', error);
      throw error;
    }
  }

  static async findByEmail(email) {
    try {
      const query = 'SELECT * FROM users WHERE email = $1';
      const result = await pool.query(query, [email]);
      return result.rows[0];
    } catch (error) {
      console.error('Erreur lors de la recherche par email:', error);
      throw error;
    }
  }

  static async findById(id) {
    try {
      const query = `
        SELECT id, firstname, lastname, email, created_at 
        FROM users 
        WHERE id = $1
      `;
      const result = await pool.query(query, [id]);
      return result.rows[0];
    } catch (error) {
      console.error('Erreur lors de la recherche par ID:', error);
      throw error;
    }
  }

  static async getUserAssociations(userId) {
    try {
      const query = `
        SELECT a.*, m.role 
        FROM association a
        JOIN membership m ON a.id = m.association_id
        WHERE m.user_id = $1
      `;
      const result = await pool.query(query, [userId]);
      return result.rows;
    } catch (error) {
      console.error('Erreur lors de la récupération des associations:', error);
      throw error;
    }
  }
}

module.exports = User;