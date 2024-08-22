import useCustomFetch from "../hooks/useCustomFetch";

export default function DashBoard() {
  const {
    data: cultures,
    isLoading,
    error,
  } = useCustomFetch(`${import.meta.env.VITE_API_URL}/cultures/`);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container font-bold text-3xl">
      {cultures?.map((culture) => (
        <div key={culture.id}>
          <p>{culture.title}</p>
        </div>
      ))}
    </div>
  );
}
