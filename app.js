const users = this.prisma.user.findMany();
import useSWR from "swr";

function Component() {
  const [state, setState] = useState("");

  const { data, isLoading, error, mutate } = useSWR("/api/users", fetcher);

  const logger = () => {
    console.log("LOG LOG");
  };

  if (isLoading) {
    return <div>LOADING ...</div>;
  }

  if (error) {
    return <div>ERROR ...</div>;
  }

  return (
    <div>
      <h2>{data.name}</h2>
      <button onClick={() => mutate()}></button>
      <button onClick={() => logger()}></button>
    </div>
  );
}

export default Component;
