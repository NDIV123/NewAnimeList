import Link from "next/link";

const header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="p-4 flex justify-between items-center text-color-primary">
      <h1 className="text-2xl font-bold">{title}</h1>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="md:text-xl text-sm underline hover:text-color-accent transition-all"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default header;
