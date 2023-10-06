import NameForm from "./components/name-form";
import { trpcOnServer } from "./_trpc/server";

export const dynamic = "force-dynamic";

const Homepage = async () => {
  const getNames = await trpcOnServer.getTodo();

  return (
    <div>
      <NameForm nameData={getNames} />
    </div>
  );
};

export default Homepage;
