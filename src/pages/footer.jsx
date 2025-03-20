export default function Footer() {
  return (
    <footer className="w-full h-auto flex justify-center items-center bg-[#13265C]">
      <div className="w-[80%] h-auto flex flex-col justify-center items-center py-16">
        <div className="flex gap-5 items-stretch w-full">
          {/* Contact Info */}
          <div className="w-[50%] bg-[#E2EAFF] px-5 py-12 flex flex-col gap-5 rounded-[20px]">
            <div className="flex gap-[82px]">
              <p className="text-[20px]">Manzil:</p>
              <p className="w-auto font-medium">
                Toshkent sh., Chilonzor tumani, Bunyodkor 50a, Navro‘z Plaza
                3-qavat.
              </p>
            </div>
            <div className="flex gap-[46px]">
              <p className="text-[20px]">Kontaktlar:</p>
              <p className="font-medium">
                +998 90 123 45 67 <br /> t.me/adminusername
              </p>
            </div>
            <div className="flex items-center gap-[48px]">
              <p className="text-[20px]">
                Ijtimoiy <br /> tarmoqlar:
              </p>
              <div className="flex gap-5">
                <a
                  href="#"
                  className="w-[35px] h-[35px] bg-[#C0D1FF] rounded-[5px] flex justify-center items-center"
                >
                  <i className="fa-brands fa-telegram text-[#13265C] text-xl"></i>
                </a>
                <a
                  href="#"
                  className="w-[35px] h-[35px] bg-[#C0D1FF] rounded-[5px] flex justify-center items-center"
                >
                  <i className="fa-brands fa-instagram text-[#13265C] text-xl"></i>
                </a>
                <a
                  href="#"
                  className="w-[35px] h-[35px] bg-[#C0D1FF] rounded-[5px] flex justify-center items-center"
                >
                  <i className="fa-brands fa-facebook-f text-[#13265C] text-xl"></i>
                </a>
                <a
                  href="#"
                  className="w-[35px] h-[35px] bg-[#C0D1FF] rounded-[5px] flex justify-center items-center"
                >
                  <i className="fa-brands fa-youtube text-[#13265C] text-xl"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="w-1/2 flex">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11521.28798741643!2d69.24768815261!3d41.31128002224017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b40d847941d%3A0x5765a18b352df71e!2sTashkent%20City%20Park!5e0!3m2!1suz!2s!4v1742468563289!5m2!1suz!2s"
              className="border-0 rounded-[20px] w-full h-auto min-h-[300px]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
}
