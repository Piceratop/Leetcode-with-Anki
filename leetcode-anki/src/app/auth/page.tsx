import React from "react";
import Navbar from "@/components/Navbar/Navbar";

type AuthPageProps = {};

const AuthPage: React.FC<AuthPageProps> = () => {
   return (
      <div className="h-screen relative">
         <div className="mx-auto">
            <Navbar />
         </div>
      </div>
   );
};
export default AuthPage;
