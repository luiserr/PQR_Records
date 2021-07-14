import db from '../../connection/db';

export async function getRecords() {
  const sql = `select * from records as r where r.status = 'new';`;
  try {
    const connection = await db();
    const result = connection.query(sql);
    connection.end();
    return result;
  }catch (e) {
    return [];
  }
}