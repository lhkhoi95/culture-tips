export default function Footer() {
  return (
    <footer className="mt-24 border">
      <div className="container my-24 flex flex-col items-start text-gray-500">
        <img src="/images/logo.png" alt="logo" className="size-24" />
        <p className="mt-4">© 2024 Culture Share. All rights reserved.</p>
        <p className="mt-4">
          Made by{" "}
          <a href="https://www.linkedin.com/in/lhkhoi95/" className="underline">
            Khoi Ly
          </a>
        </p>
        <p className="mt-4">
          Source code available on{" "}
          <a
            href="https://github.com/lhkhoi95/culture-tips"
            className="underline"
          >
            GitHub
          </a>
        </p>
        <p className="mt-4">
          Email:{" "}
          <a href="mailto:lhkhoi95@gmail.com" className="underline">
            lhkhoi95@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
}
