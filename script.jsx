import * as React from "react";
import { createRoot } from "react-dom/client";
import { SparkApp, PageContainer, Button, Card, Link } from "@github/spark/components";
import { GithubLogo } from "@phosphor-icons/react";

// Header component
const Header = () => (
  <header className="bg-accent-3 p-4">
    <h1 className="text-2xl font-bold text-accent-12">My GitHub Pages Website</h1>
  </header>
);

// Content component
const Content = () => (
  <main className="py-8">
    <Card className="mb-6">
      <h2 className="text-xl font-semibold mb-4">Welcome to my website!</h2>
      <p className="mb-4">This is a simple website hosted on GitHub Pages using React and Spark components.</p>
      <Button
        variant="primary"
        icon={<GithubLogo />}
        onClick={() => window.open("https://github.com", "_blank")}
      >
        Visit GitHub
      </Button>
    </Card>
    
    <Card>
      <h2 className="text-xl font-semibold mb-4">About This Project</h2>
      <p>
        This project demonstrates how to create a simple, responsive website using React and Spark components,
        which can be easily hosted on GitHub Pages.
      </p>
    </Card>
  </main>
);

// Footer component
const Footer = () => (
  <footer className="bg-accent-3 p-4 mt-8">
    <p className="text-center text-accent-12">
      © 2023 My GitHub Pages Website. Built with{" "}
      <Link href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
        React
      </Link>{" "}
      and Spark components.
    </p>
  </footer>
);

// Main App component
function App() {
  return (
    <SparkApp>
      <PageContainer maxWidth="large">
        <Header />
        <Content />
        <Footer />
      </PageContainer>
    </SparkApp>
  );
}

// Render the App
const root = createRoot(document.getElementById("root"));
root.render(<App />);
