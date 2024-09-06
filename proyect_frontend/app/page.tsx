import RegisterForm from "@/components/forms/RegisterForm";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/icons/logo.svg"
            height={1000}
            width={1000}
            alt="JAM"
            className="mb-12 h-10 w-fit"
          />
          <p className="mb-8 text-14-regular text-dark-600">
          ¡Bienvenido a JAM! Por favor, crea una cuenta para continuar
          </p>
        </div>
        <RegisterForm />
        <div className=" text-14-regular mt-20 flex justify-between">
          <p className="justify-items-end text-dark-600 xl:text-left">
          © 2024 JAM
          </p>
          <Link href="/?admin=true" className ="text-green-500">
          </Link>
        </div>
      </section>
      <Image  src="/assets/icons/logo.svg"
        height={1000}
        width={1000}
        alt="JAM"
        className="side-img max-w-[500%]"
      />
    </div>
  );
}
