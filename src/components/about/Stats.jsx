import { Chip } from "../util/Chip";
import Reveal from "../util/Reveal";
import { AiFillCode, AiFillSmile } from "react-icons/ai";

export const Stats = () => {
  return (
    <div className="relative">
      <Reveal>
        <div>
          <h4 className="flex items-center mb-6">
            <AiFillCode className="text-indigo-500 text-2xl" />
            <span className="font-bold ml-2">Use at work</span>
          </h4>
          <div className="flex flex-wrap gap-2 mb-12">
            <Chip>JavaScript</Chip>
            <Chip>TypeScript</Chip>
            <Chip>Node.js</Chip>
            <Chip>Express.js</Chip>
            <Chip>React.js</Chip>
            <Chip>Next.js</Chip>
            <Chip>MongoDB</Chip>
            <Chip>Mongoose</Chip>
            <Chip>JWT</Chip>
            <Chip>Prisma</Chip>
            <Chip>Postman</Chip>
            <Chip>Nodemailer</Chip>
            <Chip>Razorpay</Chip>
            <Chip>Git</Chip>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div>
          <h4 className="flex items-center mb-6">
            <AiFillSmile className="text-indigo-500 text-2xl" />
            <span className="font-bold ml-2">Use for fun</span>
          </h4>
          <div className="flex flex-wrap gap-2 mb-12">
            <Chip>MySQL</Chip>
            <Chip>Email.js</Chip>
            <Chip>Cloudinary</Chip>
            <Chip>FileZilla</Chip>
            <Chip>PDFKit</Chip>
            <Chip>Multer</Chip>
            <Chip>Swagger</Chip>
            <Chip>PM2</Chip>
            <Chip>Heroku</Chip>
            <Chip>Vercel</Chip>
          </div>
        </div>
      </Reveal>
    </div>
  );
};