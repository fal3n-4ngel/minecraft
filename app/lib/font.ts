import localFont from 'next/font/local';
import { Inter, Mohave, Poppins } from "next/font/google";



export const inter = Inter({ subsets: ["latin"] });
export const mohave = Mohave({ subsets: ["latin"] });
export const poppins = Poppins({ subsets: ["latin"], weight: ['400', '500', '700'] });


export const mineHeading = localFont({
  src:[{
    path:'../../public/fonts/minecraft/MinecraftBold-nMK1.otf',
    weight: '500',
    style: 'normal',
  }
  ]
})

export const KodchasanBold = localFont({
    src:[{
      path:'../../public/fonts/Kodchasan/Kodchasan-MediumItalic.ttf',
      weight: '500',
      style: 'normal',
    }
    ]
  })

  export const Grandstander= localFont({
    src:[{
      path:'../../public/fonts/Grandstander/Grandstander-VariableFont_wght.ttf',
      weight: '500',
      style: 'normal',
    }
    ]
  })