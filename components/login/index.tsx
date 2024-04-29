"use client";
import { DlIcon, DlInput } from "@alicorpdigital/dali-react";
import { DlCheckbox } from "@alicorpdigital/dali-react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { DlButton } from "@alicorpdigital/dali-react";
import { DlModal } from "@alicorpdigital/dali-react";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

type User = {
  username: string;
  password: string;
  score: number;
};

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [status, setStatus] = useState<undefined | 'success' | 'error'>(undefined);

  const { user, setUser } = useContext(AuthContext);

  const router = useRouter();

  useEffect(() => {
    if (user?.username) {
      router.push("/home");
    }
  }, [user]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/paulotc/mvp_loyalty_db/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const handleLogin = (event: any) => {
    event.preventDefault();

    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      setUser({
        name: username,
        score: user.score,
      });
      localStorage.setItem("user", JSON.stringify(user));
      router.push("/home");
    } else {
      setStatus('error');
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <form className="dl-pb-10 dl-flex dl-flex-col">
        <div className="dl-grid dl-gap-4 dl-mb-6">
          <DlInput
            size="lg"
            label="Nombre de usuario"
            placeholder="Ingresa el usuario"
            value={username}
            status={status}
            suffix={status === 'error' ? <DlIcon name='warning-circle' /> : undefined}
            helperText={status === 'error' ? 'Este campo es requerido.' : undefined}
            onChange={(e) => {
              setUsername(e.target.value);
              setStatus(undefined);
            }}
          />
          <DlInput
            size="lg"
            type="password"
            label="Contraseña"
            placeholder="Ingresa la contraseña"
            value={password}
            status={status}
            suffix={status === 'error' ? <DlIcon name='warning-circle' /> : undefined}
            helperText={status === 'error' ? 'Este campo es requerido.' : undefined}
            onChange={(e) => {
              setPassword(e.target.value);
              setStatus(undefined);
            }}
          />
        </div>
        {/* <div className="dl-my-6 dl-flex dl-items-start sm:dl-items-center dl-gap-2">
          <DlCheckbox size="lg"></DlCheckbox>
          <span>
            He leído y aceptado los{" "}
            <a className="dl-text-link-blue dl-underline" href="#">
              Términos & Condiciones
            </a>
          </span>
        </div> */}

        <DlButton onClick={() => handleLogin(event)} block>
          Ingresar
        </DlButton>
        <DlCheckbox className="dl-mt-6" size="lg">
          Recuérdame
        </DlCheckbox>
        <a
          className="dl-text-link-blue dl-mt-6"
          href="#"
          onClick={() => setModalOpen(true)}
        >
          ¿Olvidaste tu contraseña?
        </a>
      </form>

      <DlModal
        open={modalOpen}
        closeable
        okText="Ir a whatsapp"
        style={{ paddingTop: "24px", minWidth: "20rem" }}
      >
        <div
          className="  dl-gap-4  "
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div className=" dl-flex dl-flex-col dl-items-center  dl-gap-4">
            <img
              className="dl-block max-md:dl-w-full max-md:dl-h-[8rem]"
              src="/login/WsppImage.svg"
              alt="whatsapp"
            />
            <h2 className="dl-font-alicorpSans dl-font-bold max-md:dl-text-center max-md:dl-leading-10 dl-text-[2rem]">
              Recuperar contraseña
            </h2>
          </div>
          <div className="dl-flex dl-flex-col dl-items-center dl-mt-3 max-md:dl-mt-0">
            <p className=" dl-font-alicorpSans dl-font-normal dl-text-center  max-sm:dl-text-[0.9rem] dl-leading-4 ">
              Para ayudarte a recuperar tu contraseña, se te redirigirá a
              WhatsApp.
            </p>
            <p className="dl-font-alicorpSans dl-font-semibold dl-text-[#6C6C6C] dl-leading-4 dl-tex-sm">
              ¿Deseas continuar?
            </p>
          </div>

          <div className="dl-flex  max-md:dl-flex-col-reverse dl-justify-start-between dl-gap-4 dl-w-full dl-pb-4 dl-py-8 max-md:dl-py-1  dl-px-6 ">
            <DlButton
              block
              size="md"
              variant="tertiary"
              onClick={handleCloseModal}
            >
              Cancelar
            </DlButton>
            <a href="https://wa.link/295pks">
              <DlButton block size="md">
                Ir a whatsapp
              </DlButton>
            </a>
          </div>
        </div>
      </DlModal>
    </>
  );
}
