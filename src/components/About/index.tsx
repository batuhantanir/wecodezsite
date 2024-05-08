import React from "react";
import { Tooltip } from "./component/ToolTip";

function About() {
  return (
    <div className=" pt-40 md:pt-44 max-w-7xl mx-auto mb-20">
      <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-20 px-5 md:px-0 text-neutral-700 dark:text-zinc-200">
        <div className=" md:w-3/5">
          <div className="space-y-4">
            <h2 className="font-medium text-xl">About Page</h2>
            <p className="ml-2">
              Wecodez, web, mobil ve backend geliştirme alanında uzmanlaşmış bir
              yazılım şirketidir. Müşterilerine yenilikçi çözümler sunarak
              dijital ürünlerini ve hizmetlerini güçlendirme misyonuyla yola
              çıkmıştır. Ekibi, tecrübeli ve yetenekli yazılım mühendislerinden
              oluşmakta olup, her projeye özgü çözümler üreterek müşteri
              memnuniyetini en üst seviyede tutmayı hedeflemektedir.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="font-medium text-xl pt-10">Vizyonumuz</h2>
            <p className="ml-2">
              Wecodez olarak, dijital dünyada sınırları zorlayan, inovasyon ve
              teknolojiyi kullanarak dönüştürücü çözümler sunmak vizyonumuzun
              temelini oluşturur. Müşterilerimizin dijital varlıklarını
              güçlendirerek, işlerini büyütmelerine ve başarıya ulaşmalarına
              yardımcı olmak için sürekli olarak kendimizi geliştiririz. Her bir
              projede özgün ve yaratıcı yaklaşımlarımızla, endüstri
              standartlarını aşan çözümler sunmayı hedefleriz. Müşteri
 
            </p>
          </div>
          <div>
            <h2 className="font-medium text-xl pt-10">Misyonumuz</h2>
            <p className="ml-2">
              Wecodez, müşterilerine dijital dünyada rekabet avantajı sağlayan
              yenilikçi çözümler sunarak, işlerini büyütmelerine ve başarıya
              ulaşmalarına yardımcı olmayı misyon edinmiştir. Müşteri
              memnuniyetini en üst seviyede tutarak, her projede kaliteli ve
              özgün çözümler üretiriz. Müşterilerimizin ihtiyaçlarını anlayarak,
              onlara özel çözümler sunarız. Her bir projede müşterilerimizle iş
              birliği yaparak, onların hedeflerine ulaşmaları için en uygun
              çözümleri geliştiririz. Wecodez olarak, teknolojiyi kullanarak, iş
       
            </p>
          </div>
          <div>
            <h2 className="font-medium text-xl pt-10">İletişim Bilgileri</h2>
            <p className="ml-2">
              Adres: [Şirket Adresi] Telefon: [Telefon Numarası] E-posta:
              [E-posta Adresi] Website: [Website Adresi] whatsaap:[whatsaap
              numarası]
            </p>
          </div>
        </div>
        <div className="md:pt-10 md:w-2/5 flex flex-col gap-20 items-center">
          <Tooltip />
          <img
            className="hidden md:block w-[500px] h-[500px]
            object-cover rounded-lg  drop-shadow-xl dark:shadow-white"
            src="/about.png"
            alt="about image"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
