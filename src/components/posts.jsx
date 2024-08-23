// import useCustomFetch from "../hooks/useCustomFetch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import useHttp from "../hooks/useHttp";
import { Link } from "react-router-dom";

const requestConfig = {};

export default function Posts() {
  const {
    data: cultures,
    isLoading,
    error,
  } = useHttp("http://localhost:8000/api/cultures/", requestConfig, []);

  if (isLoading) return <Skeleton />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container min-h-screen px-2">
      <div className="mx-auto max-w-3xl overflow-auto rounded-xl border p-2 shadow-md md:p-8">
        <div className="flex justify-end">
          <Link to="/posts/add">
            <Button
              onClick={undefined}
              className="flex rounded-full font-bold text-xs"
            >
              Create Post
            </Button>
          </Link>
        </div>

        {cultures?.map((culture) => {
          const catAvatar = getCatAvatar();

          return (
            <div key={culture.id} className="border-b px-4 py-8">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={catAvatar} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <h3 className="font-bold">{culture.title}</h3>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-gray-500">
                      {culture.country}
                    </p>
                    <Avatar className="size-6">
                      <AvatarImage src={culture.flag_url} />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </div>
              <p className="mt-4">{culture.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function getCatAvatar() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  return `https://cat-avatars.vercel.app/api/cat?name=${randomNumber}`;
}

function Skeleton() {
  return (
    <div className="container min-h-screen px-2">
      <div className="mx-auto max-w-3xl overflow-auto rounded-xl border p-2 shadow-md md:p-8">
        <div className="flex justify-end">
          <div className="h-8 w-28 animate-pulse rounded-full bg-gray-200"></div>
        </div>

        {[...Array(3)].map((_, index) => (
          <div key={index} className="animate-pulse border-b px-4 py-8">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gray-200"></div>
              <div className="flex flex-1 flex-col gap-2">
                <div className="h-4 w-3/4 rounded bg-gray-200"></div>
                <div className="flex items-center gap-2">
                  <div className="h-4 w-1/4 rounded bg-gray-200"></div>
                  <div className="h-6 w-6 rounded-full bg-gray-200"></div>
                </div>
              </div>
            </div>
            <div className="mt-4 h-4 w-full rounded bg-gray-200"></div>
            <div className="mt-2 h-4 w-5/6 rounded bg-gray-200"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
