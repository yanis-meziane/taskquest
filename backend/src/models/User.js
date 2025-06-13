const pool = require('../config/database');
const bcrypt = require('bcryptjs');

class User {
  static async create({ email, password, name }) {
    const hashedPassword = await bcrypt.hash(password, 12);
    
    const query = `
      INSERT INTO users (email, password, name, created_at)
      VALUES ($1, $2, $3, NOW())
      RETURNING id, email, name, created_at
    `;
    
    const result = await pool.query(query, [email, hashedPassword, name]);
    return result.rows[0];
  }

  static async findByEmail(email) {
    const query = 'SELECT * FROM users WHERE email = $1';
    const result = await pool.query(query, [email]);
    return result.rows[0];
  }

  static async findById(id) {
    const query = `
      SELECT id, email, name, created_at 
      FROM users 
      WHERE id = $1
    `;
    const result = await pool.query(query, [id]);
    return result.rows[0];
  }

  static async getUserAssociations(userId) {
    const query = `
      SELECT a.*, ua.role 
      FROM associations a
      JOIN user_associations ua ON a.id = ua.association_id
      WHERE ua.user_id = $1
    `;
    const result = await pool.query(query, [userId]);
    return result.rows;
  }
}

module.exports = User;