import { ReactNode } from "react";

function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-auth-light bg-center bg-no-repeat px-4 py-10 dark:bg-auth-dark">

      <section Classname>

      </section>
      {children}
    </main>
  );
}

export default AuthLayout;
