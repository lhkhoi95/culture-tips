export default function Footer() {
  return (
    <footer className="mt-24 border">
      <div className="container my-24 flex flex-col items-start text-gray-500">
        <img src="/images/logo.png" alt="logo" className="size-24" />
        <p>© 2024 Culture Share. All rights reserved.</p>
        <p>
          Made by{" "}
          <a href="https://www.linkedin.com/in/lhkhoi95/" className="underline">
            Khoi Ly
          </a>
        </p>
      </div>
    </footer>
  );
}
