import db from '../../connection/db';

export default async function fileRecord(id) {
  const sql = `update records set status='archived' where id='${id}'`;
  try {
    const connection = await db();
    const result = await connection.query(sql);
    return result.affectedRows > 0;
  } catch (e) {
    return false;
  }
}