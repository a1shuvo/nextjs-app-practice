import Image from "next/image";
import Link from "next/link";

const data = [
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
const ServicesPage = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Services</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((service) => (
          <Link
            key={service._id}
            href={`/services/${service._id}`}
            className="block rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-transform transform hover:scale-105"
          >
            <div className="w-full h-48 relative">
              <Image
                src={service.service_image}
                alt={service.service_name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold my-2">
                {service.service_name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
