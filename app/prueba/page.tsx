"use client";

export default function PruebaPage() {
  return (
    <>
      {/* <button className="dl-bg-red-600 dl-py-3 dl-px-8 dl-rounded-lg dl-text-white">
        Boton de prueba
      </button> */}

      <div className="dl-p-4 dl-flex-1 rounded-lg dl-flex dl-gap-6 dl-border dl-border-neutral-medium dl-bg-neutral-lightest">
        <div className="dl-min-w-[88px] dl-flex dl-items-center dl-relative">
          {/* <img alt="file" loading="lazy" width="88" height="88" decoding="async" data-nimg="1" srcset="/_next/image?url=%2Fhome%2Fbook.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fhome%2Fbook.png&amp;w=256&amp;q=75 2x" src="/_next/image?url=%2Fhome%2Fbook.png&amp;w=256&amp;q=75" style="color: transparent;"></div> */}
          <div className="dl-flex dl-flex-col dl-w-full">
            <p className="dl-body-nano dl-text-gray-500 dl-capitalize">
              Documento PDF
            </p>
            <h4 className="dl-subtitle-nano dl-mb-2">Pruebita</h4>
            <a className="dl-ml-auto dl-mt-auto dl-btn dl-btn-highlight dl-btn-sm">
              <i className="dl-icon dli-download-regular dl-icon-md"></i>
              Descargar
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
