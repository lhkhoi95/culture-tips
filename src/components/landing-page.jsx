import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="container mx-auto grid min-h-screen grid-cols-1 items-center gap-4 p-4 md:grid-cols-2">
      <div className="w-full">
        <img
          src="/images/bg-image.png"
          alt="background image"
          className="h-full object-cover"
        />
      </div>
      <div className="flex flex-col items-center gap-4 p-4">
        <h1 className="font-bold text-4xl md:text-6xl">Culture Share</h1>
        <p className="text-center font-medium text-lg text-gray-600">
          Explore and preserve diverse cultures through a platform of stories
          and experiences.
        </p>
        <div className="flex flex-row gap-4">
          <Button variant="outline" className="rounded-full">
            Learn more
          </Button>
          <Link to="/posts">
            <Button className="rounded-full">Start Sharing</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
