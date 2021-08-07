

export default function Records({records = []}) {
  return <TableRecords data={[]}/>
};

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/records');
  const records = await res.json();
  return {
    records
  }
};
