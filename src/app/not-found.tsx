import Image from "next/image";

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
      }}
    >
      <h2>Uuuuuups</h2>
      <Image src="/not-found.png" alt="404" width={400} height={400} />
    </div>
  );
}
