import Image from "next/image";
import { notFound } from "next/navigation";

const services = [
  {
    _id: "64bfa2f4d2aeb1c8a7f7b101",
    service_name: "Express Parcel Delivery",
    service_image: "/service_img_1.jpg",
    service_description:
      "Fast and secure parcel delivery across Bangladesh within 24 hours.",
  },
  {
    _id: "64bfa2f4d2aeb1c8a7f7b102",
    service_name: "Cold Chain Logistics",
    service_image: "/service_img_2.jpg",
    service_description:
      "Temperature-controlled delivery service for perishable goods like food and medicine.",
  },
  {
    _id: "64bfa2f4d2aeb1c8a7f7b103",
    service_name: "E-commerce Fulfillment",
    service_image: "/service_img_3.jpg",
    service_description:
      "Reliable storage, packaging, and delivery solutions tailored for online sellers.",
  },
];

const ServiceDetailsPage = async ({ params }) => {
  const { id } = await params;
  const service = services.find((s) => s._id === id);

  if (!service) {
    return notFound(); // 404 page if invalid ID
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">{service.service_name}</h1>
      <div className="w-full h-96 relative mb-6 rounded-lg overflow-hidden shadow-md">
        <Image
          src={service.service_image}
          alt={service.service_name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <p className="text-gray-700 text-lg">{service.service_description}</p>
    </div>
  );
};

export default ServiceDetailsPage;
