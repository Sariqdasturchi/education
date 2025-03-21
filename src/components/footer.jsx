import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex bg-[#13265C] h-auto justify-center w-full items-center">
      <div className="flex flex-col h-auto justify-center w-[90%] items-center py-16 xl:w-[80%]">
        <div className="flex flex-col w-full gap-5 items-stretch md:flex-row">
          {/* Contact Info */}
          <div className="flex flex-col bg-[#E2EAFF] rounded-[20px] gap-3 md:w-1/2 px-[12px] py-5">
            <div className="flex gap-[82px]">
              <p className="text-[13px] lg:text-[20px]">Manzil:</p>
              <p className="text-[12px] w-auto font-medium lg:text-[20px]">
                Toshkent sh., Chilonzor tumani, Bunyodkor 50a, Navro‘z Plaza
                3-qavat.
              </p>
            </div>
            <div className="flex gap-[46px]">
              <p className="text-[13px] lg:text-[20px]">Kontaktlar:</p>
              <p className="text-[12px] font-medium lg:text-[20px]">
                +998 90 123 45 67 <br /> t.me/adminusername
              </p>
            </div>
            <div className="flex gap-[48px] items-center">
              <p className="text-[13px] lg:text-[20px]">
                Ijtimoiy <br /> tarmoqlar:
              </p>
              <div className="flex gap-5">
                <a
                  href="#"
                  className="flex bg-[#C0D1FF] h-[25px] justify-center rounded-[5px] w-[25px] items-center lg:h-[35px] lg:w-[35px]"
                >
                  <i className="text-[#13265C] text-sm fa-brands fa-telegram lg:text-xl"></i>
                </a>
                <a
                  href="#"
                  className="flex bg-[#C0D1FF] h-[25px] justify-center rounded-[5px] w-[25px] items-center lg:h-[35px] lg:w-[35px]"
                >
                  <i className="text-[#13265C] text-sm fa-brands fa-instagram lg:text-xl"></i>
                </a>
                <a
                  href="#"
                  className="flex bg-[#C0D1FF] h-[25px] justify-center rounded-[5px] w-[25px] items-center lg:h-[35px] lg:w-[35px]"
                >
                  <i className="text-[#13265C] text-sm fa-brands fa-facebook-f lg:text-xl"></i>
                </a>
                <a
                  href="#"
                  className="flex bg-[#C0D1FF] h-[25px] justify-center rounded-[5px] w-[25px] items-center lg:h-[35px] lg:w-[35px]"
                >
                  <i className="text-[#13265C] text-sm fa-brands fa-youtube lg:text-xl"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="flex md:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11521.28798741643!2d69.24768815261!3d41.31128002224017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b40d847941d%3A0x5765a18b352df71e!2sTashkent%20City%20Park!5e0!3m2!1suz!2s!4v1742468563289!5m2!1suz!2s"
              className="border-0 h-auto rounded-[20px] w-full min-h-[193px]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="text-white pt-[30px] self-start">
          <Link to={"/"} className="text-lg font-extrabold lg:text-[32px] md:text-2xl uppercase">
            Sayt Nomi
          </Link>
          <p className="text-[15px] lg:text-[20px]">
            © 2025 Sayt nomi. Barcha huquqlar himoyalangan
          </p>
        </div>
      </div>
    </footer>
  );
}
