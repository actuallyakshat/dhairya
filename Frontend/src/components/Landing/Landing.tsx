import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export default function Landing() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Diminish the Chaos
            <strong className="font-extrabold text-primary sm:block">
              Amplify the Clarity.
            </strong>
          </h1>

          <p className="mt-4 text-lg font-medium text-muted-foreground">
            Dhairya helps you find calm and focus through expertly crafted
            meditation sessions. Transform your daily routine with moments of
            peace and clarity.
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <Button className="w-full" size={"lg"}>
              <Link to="#">Get Started</Link>
            </Button>

            <Button className="w-full" variant={"outline"} size={"lg"}>
              <Link to="#">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
