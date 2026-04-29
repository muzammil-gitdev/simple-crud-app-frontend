function StudentCard({ data }) {
  return (
    <div className="flex flex-col gap-y-5 px-10 py-8 border rounded-2xl">
      <p>Name: {data.name}</p>
      <p>regno: {data.regno}</p>
      <p>age: {data.age}</p>
      <p>Program: {data.program}</p>
      <p>CreatedAt: {data.createdAt}</p>
    </div>
  );
}

export default StudentCard;
