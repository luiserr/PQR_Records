import mariadb from 'mariadb';

/**
 *
 * @returns PoolConnection|null
 */
export default async function() {
  let connection;
  try {
    const pool = mariadb.createPool({
      host: '192.168.1.90',
      user: 'asterisk',
      password: 'asterisk@mariadb',
      port: 3306,
      database: 'asteriskcdr'
    });
    return await pool.getConnection();
  }catch (e) {
    return null;
  }
}