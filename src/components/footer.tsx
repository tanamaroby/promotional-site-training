import {
  SiFacebook,
  SiInstagram,
  SiTwitch,
  SiYoutube,
} from "@icons-pack/react-simple-icons";

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 py-12">
      <p className="text-4xl uppercase tracking-widest font-bold">
        Follow Us ON
      </p>
      <div className="flex items-center gap-8 justify-center w-full">
        <SiFacebook
          size={80}
          className="hover:scale-110 transition-transform"
        />
        <SiInstagram
          size={80}
          className="hover:scale-110 transition-transform"
        />
        <SiTwitch size={80} className="hover:scale-110 transition-transform" />
        <SiYoutube size={80} className="hover:scale-110 transition-transform" />
      </div>
      <p className="text-3xl">Copyright Trietech Pte. Ltd. 2025</p>
    </div>
  );
}
