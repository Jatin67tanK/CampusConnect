
export default function ActionCard({ title, icon }) {
  return (
    <div className="bg-white p-6 rounded shadow flex flex-col items-center">
      <div className="text-blue-600 text-3xl mb-2">{icon}</div>
      <p>{title}</p>
    </div>
  );
}
