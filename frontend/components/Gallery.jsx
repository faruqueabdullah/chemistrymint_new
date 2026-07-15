import { client } from "@/lib/sanity";
import { galleryQuery } from "@/lib/queries";
import { urlFor } from "@/lib/imageUrl";
import Image from "next/image";

export const revalidate = 60;

export default async function Gallery() {
  const images = await client.fetch(galleryQuery);

  // console.log(images);

  return (
    <>
    <h1>Total images : {images.length}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-10">
      {images.map((item) => (
        <div key={item._id}>
          <Image
            src={urlFor(item.image).url()}
            alt={item.alt || item.title}
            width={500}
            height={500}
            unoptimized
          />

          <h2 className="mt-2 font-semibold">{item.title}</h2>
        </div>
      ))}
    </div>
    </>
  );
}
