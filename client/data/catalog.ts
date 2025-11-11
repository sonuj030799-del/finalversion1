import type { Product } from "@shared/api";

export const CATEGORIES = [
  { key: "Promotional Gifts", label: "Promotional Gifts" },
  { key: "Corporate Gifts", label: "Corporate Gifts" },
  { key: "Festival Gifts", label: "Festival Gifts" },
  { key: "Occasional Gifts", label: "Occasional Gifts" },
  { key: "Charity Gifts", label: "Charity Gifts" },
] as const;

export const products: Product[] = [
  // === PROMOTIONAL ITEMS (used by PromotionalGifts page) START ===
  // These product objects were added specifically for the Promotional Gifts page
  // and are grouped here so you can find them easily.
  // Each object below includes `subCategory` which the strip filters on.

  // PROMO - subCategory: everyday
  {
    id: "Personalized Can Glass Tumbler - COD Not Applicable",
    name: "Personalized Can Glass Tumbler - COD Not Applicable",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762591956/Gemini_Generated_Image_qevcdhqevcdhqevc_kh2cso.png",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762591956/Gemini_Generated_Image_qevcdhqevcdhqevc_kh2cso.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762592272/Gemini_Generated_Image_37f8ky37f8ky37f8_dmidym.png",
    ],
    price: 690,
    originalPrice: 1000,
    category: "promotional-gifts",
    subCategory: "everyday",
    description:
      "A compact everyday utility promotional set — bottle, snack, and greeting card.",
  },
  // PROMO - subCategory: everyday
  {
    id: "PERSONALIZED INSULATED MINI FLASK - COD NOT APPLICABLE",
    name: "PERSONALIZED INSULATED MINI FLASK - COD NOT APPLICABLE",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762695540/Gemini_Generated_Image_vdhu7hvdhu7hvdhu_nj5ju3.png",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762695540/Gemini_Generated_Image_vdhu7hvdhu7hvdhu_nj5ju3.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762695371/DSC03466-min_1800x1800_wc1f0v.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762695372/DSC03454-min_1200x_coidml.webp",
    ],
    price: 545,
    originalPrice: 600,
    category: "promotional-gifts",
    subCategory: "everyday",
    description: "Value everyday gift with custom branding options.",
  },
  {
    id: "PERSONALIZED LARGE CERAMIC COFFEE MUG - COD NOT APPLICABLE",
    name: "PERSONALIZED LARGE CERAMIC COFFEE MUG - COD NOT APPLICABLE",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762697174/IMG_4836-min_1800x1800_ozizua.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762697174/IMG_4836-min_1800x1800_ozizua.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762697173/Gemini_Generated_Image_g8x9edg8x9edg8x9_qaqddu.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762697148/IMG_4775-min_800x_mfttwl.webp",
    ],
    price: 799,
    originalPrice: 850,
    category: "promotional-gifts",
    subCategory: "everyday",
    description: "Value everyday gift with custom branding options.",
  },
  {
    id: "PERSONALIZED HAMPER - SELF-CARE GIRLIE - COD NOT APPLICABLE",
    name: "PERSONALIZED HAMPER - SELF-CARE GIRLIE - COD NOT APPLICABLE",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762699273/Gemini_Generated_Image_wtri9awtri9awtri_zuei4x.png",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762699273/Gemini_Generated_Image_wtri9awtri9awtri_zuei4x.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762699269/JewelleryBox_7_e3630604-01ea-4c87-88bb-ba07a2c445ec_800x_mnwddj.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762699276/Gemini_Generated_Image_qm3glhqm3glhqm3g_ewunzf.png",
    ],
    price: 1900,
    originalPrice: 2150,
    category: "promotional-gifts",
    subCategory: "everyday",
    description: "Value everyday gift with custom branding options.",
  },
  {
    id: "PERSONALIZED CAN GLASS TUMBLER - SNOWFLAKE - COD NOT APPLICABLE",
    name: "PERSONALIZED CAN GLASS TUMBLER - SNOWFLAKE - COD NOT APPLICABLE",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762700941/Gemini_Generated_Image_hzesc5hzesc5hzes_plolwf.png",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762700941/Gemini_Generated_Image_hzesc5hzesc5hzes_plolwf.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762700942/Gemini_Generated_Image_ra3ovbra3ovbra3o_jmqv0m.png",
    ],
    price: 845,
    originalPrice: 900,
    category: "promotional-gifts",
    subCategory: "everyday",
    description: "Value everyday gift with custom branding options.",
  },
  {
    id: "PERSONALIZED CLEAR ZIPPER POUCH - COD NOT APPLICABLE",
    name: "PERSONALIZED CLEAR ZIPPER POUCH - COD NOT APPLICABLE",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762702513/Gemini_Generated_Image_aaehxgaaehxgaaeh_tampa6.png",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762702513/Gemini_Generated_Image_aaehxgaaehxgaaeh_tampa6.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762702511/Gemini_Generated_Image_d48p4ed48p4ed48p_yjkyra.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762702510/Gemini_Generated_Image_9cbzyk9cbzyk9cbz_f0rlhe.png",
    ],
    price: 525,
    originalPrice: 600,
    category: "promotional-gifts",
    subCategory: "everyday",
    description: "Value everyday gift with custom branding options.",
  },
  {
    id: "PERSONALIZED HAMPER - REGAL - COD NOT APPLICABLE",
    name: "PERSONALIZED HAMPER - REGAL - COD NOT APPLICABLE",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762704618/Gemini_Generated_Image_exe23rexe23rexe2_alpsvk.png",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762704618/Gemini_Generated_Image_exe23rexe23rexe2_alpsvk.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762704618/Gemini_Generated_Image_pv463ipv463ipv46_cdslwy.png",
    ],
    price: 1699,
    originalPrice: 1850,
    category: "promotional-gifts",
    subCategory: "everyday",
    description: "Value everyday gift with custom branding options.",
  },
  {
    id: "Money Plant In Stylish Terracotta Pot",
    name: "Money Plant In Stylish Terracotta Pot",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762705128/DSC_2761_pt1wzk.avif",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762705128/DSC_2761_pt1wzk.avif",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762705157/DSC_2762_kncklz.avif",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762705158/DSC_2763_h45vmf.avif",
    ],
    price: 625,
    category: "promotional-gifts",
    subCategory: "everyday",
    description: "Value everyday gift with custom branding options.",
  },

  // PROMO - subCategory: travel
  {
    id: "Exclusive Passport Cover - Wanderlust",
    name: "Exclusive Passport Cover - Wanderlust",
    image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762758513/Gemini_Generated_Image_awub9cawub9cawub_onhx8j.png",
    images: ["https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762758513/Gemini_Generated_Image_awub9cawub9cawub_onhx8j.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762758514/Gemini_Generated_Image_8y63vp8y63vp8y63_sceydm.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762758513/Gemini_Generated_Image_90fk3s90fk3s90fk_cz2ptg.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762758512/personalized-passport-cover-forest-green-the-messy-corner-passport-cover-19463612858524_0ac71628-1e57-4cc2-b3d4-025a661cbd56_1300x_z6j4kn.webp"
    ],
    price: 449,
    originalPrice: 900,
    category: "promotional-gifts",
    subCategory: "travel",
    description: "Premium travel kit for corporate gifting.",
  },
  {
    id: "Travel Memory Box - souvenir & keepsake box customized",
    name: "Travel Memory Box - souvenir & keepsake box customized",
    image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762771590/Gemini_Generated_Image_xh6l3mxh6l3mxh6l_eigmwy.png",
    images: ["https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762771590/Gemini_Generated_Image_xh6l3mxh6l3mxh6l_eigmwy.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762771589/Gemini_Generated_Image_2sne1x2sne1x2sne_z6drjx.png"],
    price: 990,
    originalPrice: 1399,
    category: "promotional-gifts",
    subCategory: "travel",
    description: "Premium travel kit for corporate gifting.",
  },
   {
    id: "Customized 6-in-1 Travel Gift Set – Perfect for Business & Travel",
    name: "Customized 6-in-1 Travel Gift Set – Perfect for Business & Travel",
    image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762772027/Gemini_Generated_Image_jkpv94jkpv94jkpv_fbdsn6.png",
    images: ["https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762772027/Gemini_Generated_Image_jkpv94jkpv94jkpv_fbdsn6.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762772026/Gemini_Generated_Image_an4seoan4seoan4s_o6afgp.png",
    "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762772026/Gemini_Generated_Image_ig3189ig3189ig31_xbbxnq.png"],
    price: 1495,
    originalPrice: 2995,
    category: "promotional-gifts",
    subCategory: "travel",
    description: "Premium travel kit for corporate gifting.",
  },
    {
    id: "Jet Setter Gift Tote",
    name: "Jet Setter Gift Tote",
    image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762772306/NewProject_3_1476905e-1302-4605-9884-ad9492af6d18_800x800_iwmdi7.webp",
    images: ["https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762772306/NewProject_3_1476905e-1302-4605-9884-ad9492af6d18_800x800_iwmdi7.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762772305/NewProject_4_25588915-ad3a-4329-bcae-9c30bf415726_800x800_clvbqi.webp"],
    price: 7130,
    originalPrice: 7130,
    category: "promotional-gifts",
    subCategory: "travel",
    description: "Premium travel kit for corporate gifting.",
  },
    {
    id: "Gold Foiled Pocket Umbrella",
    name: "Gold Foiled Pocket Umbrella",
    image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762772590/DSC09506-min_1800x1800_jurumd.jpg",
    images: ["https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762772590/DSC09506-min_1800x1800_jurumd.jpg",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762772589/DSC09520-min_1500x1500_l6eekt.webp",
    "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762772589/DSC09516-min_1800x1800_mbeslu.webp"],
    price: 800 ,
    originalPrice: 1000,
    category: "promotional-gifts",
    subCategory: "travel",
    description: "Premium travel kit for corporate gifting.",
  },
   {
    id: "PERSONALIZED CLEAR ZIPPER POUCH - COD NOT APPLICABLE",
    name: "PERSONALIZED CLEAR ZIPPER POUCH - COD NOT APPLICABLE",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762702513/Gemini_Generated_Image_aaehxgaaehxgaaeh_tampa6.png",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762702513/Gemini_Generated_Image_aaehxgaaehxgaaeh_tampa6.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762702511/Gemini_Generated_Image_d48p4ed48p4ed48p_yjkyra.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762702510/Gemini_Generated_Image_9cbzyk9cbzyk9cbz_f0rlhe.png",
    ],
    price: 525,
    originalPrice: 600,
    category: "promotional-gifts",
    subCategory: "travel",
    description: "Value everyday gift with custom branding options.",
  },
   {
    id: "PERSONALIZED LARGE CERAMIC COFFEE MUG - COD NOT APPLICABLE",
    name: "PERSONALIZED LARGE CERAMIC COFFEE MUG - COD NOT APPLICABLE",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762697174/IMG_4836-min_1800x1800_ozizua.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762697174/IMG_4836-min_1800x1800_ozizua.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762697173/Gemini_Generated_Image_g8x9edg8x9edg8x9_qaqddu.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762697148/IMG_4775-min_800x_mfttwl.webp",
    ],
    price: 799,
    originalPrice: 850,
    category: "promotional-gifts",
    subCategory: "travel",
    description: "Value everyday gift with custom branding options.",
  },
  {
    id: "Personalized Can Glass Tumbler - COD Not Applicable",
    name: "Personalized Can Glass Tumbler - COD Not Applicable",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762591956/Gemini_Generated_Image_qevcdhqevcdhqevc_kh2cso.png",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762591956/Gemini_Generated_Image_qevcdhqevcdhqevc_kh2cso.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762592272/Gemini_Generated_Image_37f8ky37f8ky37f8_dmidym.png",
    ],
    price: 690,
    originalPrice: 1000,
    category: "promotional-gifts",
    subCategory: "travel",
    description:
      "A compact everyday utility promotional set — bottle, snack, and greeting card.",
  },
  // PROMO - subCategory: everyday
  {
    id: "PERSONALIZED INSULATED MINI FLASK - COD NOT APPLICABLE",
    name: "PERSONALIZED INSULATED MINI FLASK - COD NOT APPLICABLE",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762695540/Gemini_Generated_Image_vdhu7hvdhu7hvdhu_nj5ju3.png",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762695540/Gemini_Generated_Image_vdhu7hvdhu7hvdhu_nj5ju3.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762695371/DSC03466-min_1800x1800_wc1f0v.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762695372/DSC03454-min_1200x_coidml.webp",
    ],
    price: 545,
    originalPrice: 600,
    category: "promotional-gifts",
    subCategory: "travel",
    description: "Value everyday gift with custom branding options.",
  },
  {
    id: "Personalized Sleek Pocket Umbrella - COD Not Applicable",
    name: "Personalized Sleek Pocket Umbrella - COD Not Applicable",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762773075/DSC07253-min_1200x_s6ubmh.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762773075/DSC07253-min_1200x_s6ubmh.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762773076/DSC07256-min_1200x_flbnyr.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762773078/DSC07258-min_1200x_stmhwo.webp",
    ],
    price: 899,
    originalPrice: 1100,
    category: "promotional-gifts",
    subCategory: "travel",
    description: "Value everyday gift with custom branding options.",
  },


  // PROMO - subCategory: lifestyle
  {
    id: "Gorgeous Bride Gift Box",
    name: "Gorgeous Bride Gift Box",
    image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762855490/Gorgeous-Bride-2-768x768_haumcj.webp",
    images: ["https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762855490/Gorgeous-Bride-2-768x768_haumcj.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762855489/Gorgeous-Bride--768x782_btjawv.webp"
    ],
    price: 2175,
    originalPrice: 2500,
    category: "promotional-gifts",
    subCategory: "lifestyle",
    description: "Personal care & lifestyle gifts suitable for events.",
  },
  
  {
    id: "Pretty Pink Box for Her",
    name: "Pretty Pink Box for Her",
    image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762856397/Pretty-Pink-Gift-Hamper-3_vlqpxo.webp",
    images: ["https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762856397/Pretty-Pink-Gift-Hamper-3_vlqpxo.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762856397/Pretty-Pink-Gift-Hamper-3_vlqpxo.webp"
    ],
    price: 2599,
    originalPrice: 2999,
    category: "promotional-gifts",
    subCategory: "lifestyle",
    description: "Personal care & lifestyle gifts suitable for her.",
  },
  {
    id: "Pamper Yourself Gift Hamper",
    name: "Pamper Yourself Gift Hamper",
    image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762856972/pamper-yourself-gift-hamper-the-spring-palette-37328289169627_uye89z.webp",
    images: ["https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762856972/pamper-yourself-gift-hamper-the-spring-palette-37328289169627_uye89z.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762856971/pamper-yourself-gift-hamper-the-spring-palette-37328289661147_ne8zap.jpg",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762856970/pamper-yourself-gift-hamper-the-spring-palette-37328304111835_x1ormz.jpg",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762856970/pamper-yourself-gift-hamper-the-spring-palette-37328290021595_ayfity.webp"
    ],
    price: 2249,
    originalPrice: 2999,
    category: "promotional-gifts",
    subCategory: "lifestyle",
    description: "Personal care & lifestyle gifts suitable for her.",
  },
   {
    id: "Sweet Birthday Celebration Basket",
    name: "Sweet Birthday Celebration Basket",
    image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762857495/Gemini_Generated_Image_t1ek01t1ek01t1ek_himzxy.png",
    images: ["https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762857495/Gemini_Generated_Image_t1ek01t1ek01t1ek_himzxy.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762857495/Gemini_Generated_Image_rhk2uirhk2uirhk2_ggcl3w.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762857496/Gemini_Generated_Image_kahar6kahar6kaha_az8oef.png"
    ],
    price: 1575,
    originalPrice: 1800,
    category: "promotional-gifts",
    subCategory: "lifestyle",
    description: "Personal care & lifestyle gifts suitable for her.",
  },

  // PROMO - subCategory: eco
  {
    id: "Thenga Evergreen Eco-Friendly Gift Hampers",
    name: "Thenga Evergreen Eco-Friendly Gift Hampers",
    image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762857931/Evergreen3_1080x_phrevh.webp",
    images: ["https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762857931/Evergreen3_1080x_phrevh.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762857930/285_1080x_aqruoi.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762857929/Evergreen2_1080x_rfmhnv.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762857928/284_180x_pccbcg.avif"
    ],
    price: 1499,
    originalPrice: 1799,
    category: "promotional-gifts",
    subCategory: "eco",
    description: "Jute and terracotta based eco-friendly promotional gifts.",
  },
  // PROMO - subCategory: eco
  {
  id: "Eco - Essentials",
  name: "Eco - Essentials",
  image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762858534/eco-friendly-gift_cbg5tt.webp",
  images: [
    "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762858534/eco-friendly-gift_cbg5tt.webp",
    "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762858532/corporate-eco-friendly-gifts_ztazcl.webp",
    "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762858530/eco-friendly-gift-hamper_vfnz6q.webp",
    "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762858529/Mug_2_y7afv3.webp",
    "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762858528/CoconutCandle_vsffkq.webp",
    "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762858527/multipurpose-eco-friendly-canvas-pouch_sdfzhc.webp",
    "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762858526/StrawP4_iby4fu.webp"
  ],
  price: 2650,
  originalPrice: 3100,
  category: "promotional-gifts",
  subCategory: "eco",
  description: `Are you looking for eco-friendly gift hampers for employees, clients, and business associates? Check out our ‘eco-essentials’ organic gift hamper that will not only cater to your brand image but also protect the environment. Transform your everyday routine with this eco-conscious, sustainable gift hamper that combines style and sustainability.

The chic multipurpose canvas pouch keeps your essentials organized, while the 250-ml eco-friendly travel cup makes every sip feel planet-friendly. With the reusable stainless steel straw set of 4 straws in its jute pouch, you can make a small but meaningful change in your daily life to conserve the planet. Plus, you will get a coconut shell candle made with soy wax that adds a touch of natural serenity to any space.

This eco-friendly gift hamper is perfect for those who want to make a positive impact on the environment while enjoying stylish and practical accessories.`,
},
{
  id: "The Eco-friendly Box",
  name: "The Eco-friendly Box",
  image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762859400/Gemini_Generated_Image_l0d3f6l0d3f6l0d3_sklqhn.png",
  images: [
    "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762859400/Gemini_Generated_Image_l0d3f6l0d3f6l0d3_sklqhn.png",
    "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762859401/Gemini_Generated_Image_f0fdbzf0fdbzf0fd_p54vpy.png",
    "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762859432/41KDjRa5viL_888ec556-919e-4b8b-9ff0-8d398c77b85d_phoxrw.webp",
    "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762859433/CorkV1_paad1w.webp",
    "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762859435/WhatsAppImage2023-09-02at14.25.59_2_indto2.webp",
    "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762859436/WhatsAppImage2023-09-02at14.26.00_jdnuzb.webp",
    "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762859439/travelpouch.03_fb1f6bef-f104-4269-bf1a-4e1b047af671_zj6g8w.webp"
  ],
  price: 3350,
  originalPrice: 3700,
  category: "promotional-gifts",
  subCategory: "eco",
  description: `Going eco-friendly can help you go a long way.’ This saying is especially true when it comes to corporate gifting. Choosing environmentally friendly gifts is not just good for the environment but also good for your brand image. If you are looking for some creative, thoughtful, and sustainable gift ideas, this Eco-friendly box would be perfect for you.

 This eco-friendly gift box contains an insulated bamboo tumbler to keep your beverages hot or cold for a long time. The cork coasters and cork diary are a great way to reuse cork and avoid generating extra waste. You will also get a cork travel pouch in this gift hamper, that can be a great replacement for plastic travel pouches. This way, you can contribute to conserving the environment without compromising on functionality. 

The plantable pens are a great way to inspire more people to plant trees, and they come in a sustainable cork pouch. Besides being sustainable, all the items in this eco-friendly box are aesthetically pleasing and make your life easy and convenient.`,
},
{
  id: "Eco-Chic Gift Box - Bamboo like notebook, pen & Bamboo bottle Gift Pack",
  name: "Eco-Chic Gift Box - Bamboo like notebook, pen & Bamboo bottle Gift Pack",
  image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762860294/Gemini_Generated_Image_t57d7ft57d7ft57d_xykllv.png",
  images: [
    "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762860294/Gemini_Generated_Image_t57d7ft57d7ft57d_xykllv.png",
    "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762860294/Gemini_Generated_Image_sg0ovksg0ovksg0o_e8fexa.png",
    "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762860293/Gemini_Generated_Image_u708ksu708ksu708_vzrhhm.png"
  ],
  price: 3350,
  originalPrice: 3700,
  category: "promotional-gifts",
  subCategory: "eco",
  description: `Embrace style and sustainability with our Eco-Chic Gift Box, featuring a bamboo-inspired notebook, sleek bamboo water bottle, and smooth bamboo pen—all crafted from eco-friendly, reusable materials. Perfect for work, travel, and gifting, this elegant set combines natural charm with everyday functionality, helping reduce plastic waste while adding a touch of earthy sophistication to your routine or someone special’s day.
`,
},
{
  id: "The Sustainable Way",
  name: "The Sustainable Way",
  image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762860678/eco-friendly-corporate-gift-hamper_o0ec28.webp",
  images: [
    "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762860689/eco-friendly-copper-gift_s2dfhm.webp",
    "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762860678/eco-friendly-corporate-gift-hamper_o0ec28.webp",
    "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762860677/WoodenLeafCoaster_1_mbveo9.webp ",
    "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762860674/IndividualDiwaliProducts_-4_422fe08b-08a0-4070-aa5c-40fd6992e3b3_ldx3ke.webp",
    "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762860673/CoconutCandle_1_oywh5h.webp",
    "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762860672/wooden-slider-gift-box_p1qgju.webp"
  ],
  price: 2290,
  originalPrice: 3290,
  category: "promotional-gifts",
  subCategory: "eco",
  description: `Elevate your eco-conscious gifting with The Sustainable Way hamper, a thoughtfully curated box designed with sustainability and style in mind. Set inside a reusable wooden slider-lid box, this elegant hamper includes a pair of half‑hammered copper glasses, a coconut-shell candle, two leaf-carved wooden coasters, and two packs of golden almond brittle, all tied together with a greeting card of your choice. Each item is sustainably crafted from natural coconut shell and wood to plant-based brittle, making it perfect for mindful celebrations or eco-friendly gifting.

Whether it’s to delight at Diwali, to honor someone’s green lifestyle, or to serve as a standout corporate or personal gift, this hamper combines rustic aesthetics with premium packaging. Ideal for recipients who value sustainability without compromising on elegance. Celebrate consciously and beautifully with a gift that’s good for them and kind to the planet.
`,
},
{
  id: "Chef’s Essentials",
  name: "Chef’s Essentials",
  image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762861558/gift-for-chef_yjig61.webp",
  images: [
    "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762861558/gift-for-chef_yjig61.webp",
    "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762861558/Akshita_sShoot-23_hugazr.webp",
    "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762861558/IMG_5659_720x_53d5d698-01b2-43b3-a000-5b0c88a8adaa_du8isp.webp",
    "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762861557/DSC03336_720x_4820ed35-b332-4def-8039-a28a03922a23_gqqgva.webp",
    "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762861557/20210822-IMG_2803_720x_75a21a2f-c1a5-4232-b6b8-cefcd0661ac8_f20a1t.webp"
  ],
  price: 2990,
  originalPrice: 3290,
  category: "promotional-gifts",
  subCategory: "eco",
  description: `Treat the special women in your life with a delightful culinary experience with our Chef’s Essentials gift hamper, specially curated for the kitchen enthusiast in her. 
  Combining practicality with style and sentiment, this gift hamper for ladies is the perfect way to celebrate their love of cooking. 
  For the amazing chefs who make delicious and sumptuous recipes with love as their secret ingredient, this gift hamper is one of the unique gifts for women. 
  Beautifully packed in an eco-friendly reusable gift box the premium products and cooking equipment encourage experimentation and enhance culinary adventures. 
  The Chef's Essentials Gift Hamper is the perfect way to spread the joy of delicious food. 
  You can add a personalized message to convey your love and appreciation to the chef, making this gift even more memorable. 
`,
},

 {
    id: "Rasatva Ruvaa - Nirvana | Coffee Supreme | Gourmet Coffee Gift Hamper | Premium Corporate Gift for Employees | Anniversary, Festive Gift for Friends & Family",
    name: "Rasatva Ruvaa - Nirvana | Coffee Supreme | Gourmet Coffee Gift Hamper | Premium Corporate Gift for Employees | Anniversary, Festive Gift for Friends & Family",
    image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762862366/91-W9eTKZnL._SX569__mwcjk2.png",
    images: ["https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762862366/91-W9eTKZnL._SX569__mwcjk2.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762862293/81jFlp9iC4L._SX679__e8dtap.jpg",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762862295/Gemini_Generated_Image_uefi0yuefi0yuefi_xgqxwf.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762862294/Gemini_Generated_Image_6jl61h6jl61h6jl6_bqkpah.png"
    ],
    price: 2500,
    category: "promotional-gifts",
    subCategory: "premium",
    description:
      "Deluxe premium collection with assorted dryfruits and chocolates.",
  },
{
    id: "Good Wishes Sustainable Hamper",
    name: "Good Wishes Sustainable Hamper",
    image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762864167/good-wishes-sustainable-hamper_2_tteec7.png",
    images: ["https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762864167/good-wishes-sustainable-hamper_2_tteec7.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762863632/good-wishes-sustainable-hamper_1_sqaho0.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762863631/good-wishes-sustainable-hamper_3_dqueop.webp"
    ],
    price: 2499,
    category: "promotional-gifts",
    subCategory: "premium",
    description:
      `This elegant gift box is the perfect way to show your loved ones that you care about the environment This beautiful and thoughtful gift comes with personalised text on a reusable pinewood box and is filled with sustainable goodies All of the sustainable items are presented in a reusable box making it an ecofriendly and beautiful gift for any occasion
Product Details

Copper Glass Set of 2
Love and Light Coaster Set of 2
Mix Dry fruits Jar 100 gms
Copper Planter 3 x 7.62 x 10.16 cms
Green Potpourri in Jute Potli
Reusable Personalised Pinewood Box 10 x 25.40 x 114.30 cms
Net Quantity 1 Set
Dimensions 27x27x14 cm
Weight Approx 1 Kg
Country of Origin India
Vegetarian`,
  },
  {
    id: "Shaadmaan Luxury Gift Box",
    name: "Shaadmaan Luxury Gift Box",
    image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762864276/UntitledSession00049_iqirtx.webp",
    images: ["https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762864276/UntitledSession00049_iqirtx.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762864277/PurpleBird-19thDec202200450_crop_r0hers.webp"
    ],
    price: 2700,
    category: "promotional-gifts",
    subCategory: "premium",
    description:
      "Deluxe premium collection with assorted dryfruits and chocolates.",
  },
  // PROMO - subCategory: apparel
  {
    id: "promo-apparel-1",
    name: "Apparel & Wearable Pack - A",
    image: "https://picsum.photos/seed/promo-apparel-1/600/400",
    images: [],
    price: 899,
    category: "promotional-gifts",
    subCategory: "apparel",
    description: "Branded t-shirt/scarf promotional wearable.",
  },
  // PROMO - subCategory: apparel
  {
    id: "promo-apparel-2",
    name: "Apparel & Wearable Pack - B",
    image: "https://picsum.photos/seed/promo-apparel-2/600/400",
    images: [],
    price: 1299,
    category: "promotional-gifts",
    subCategory: "apparel",
    description: "Premium wearable set for corporate gifting.",
  },
 

  // PROMO - subCategory: premium
  {
    id: "promo-premium-1",
    name: "Premium Luxury Hamper - A",
    image: "https://picsum.photos/seed/promo-premium-1/600/400",
    images: [],
    price: 2999,
    originalPrice: 3499,
    category: "corporates",
    subCategory: "premium",
    description: "High-end premium hamper for executive gifting.",
  },
  
  {
    id: "corp-onboarding-1",
    name: "Employee Onboarding Kit - Starter",
    image: "https://picsum.photos/seed/corp-onboarding-1/600/400",
    images: [],
    price: 849,
    category: "corporates",
    subCategory: "onboarding",
    description: "Welcome kit for new employees: notebook, pen, and mug.",
  },
  {
    id: "corp-onboarding-2",
    name: "Employee Onboarding Kit - Pro",
    image: "https://picsum.photos/seed/corp-onboarding-2/600/400",
    images: [],
    price: 1299,
    category: "corporates",
    subCategory: "onboarding",
    description: "Premium onboarding kit with branded apparel and stationery.",
  },

  // CORPORATE - subCategory: anniversary
  {
    id: "corp-anniversary-1",
    name: "Work Anniversary Gift - Classic",
    image: "https://picsum.photos/seed/corp-anniversary-1/600/400",
    images: [],
    price: 999,
    category: "corporates",
    subCategory: "anniversary",
    description: "Elegant anniversary hamper with sweets and a greeting card.",
  },
  {
    id: "corp-anniversary-2",
    name: "Work Anniversary Gift - Premium",
    image: "https://picsum.photos/seed/corp-anniversary-2/600/400",
    images: [],
    price: 1799,
    category: "corporates",
    subCategory: "anniversary",
    description:
      "Premium dry-fruit and chocolate hamper for milestone anniversaries.",
  },

  // CORPORATE - subCategory: festival
  {
    id: "corp-festival-1",
    name: "Festival Hamper - A",
    image: "https://picsum.photos/seed/corp-festival-1/600/400",
    images: [],
    price: 1499,
    category: "corporates",
    subCategory: "festival",
    description:
      "Festive hamper suitable for corporate gifting during festivals.",
  },
  {
    id: "corp-festival-2",
    name: "Festival Hamper - B",
    image: "https://picsum.photos/seed/corp-festival-2/600/400",
    images: [],
    price: 2199,
    category: "corporates",
    subCategory: "festival",
    description: "Deluxe festival hamper with assorted sweets and decor.",
  },

  // CORPORATE - subCategory: funfriday
  {
    id: "corp-funfriday-1",
    name: "Fun-Friday Hamper - Snacks",
    image: "https://picsum.photos/seed/corp-funfriday-1/600/400",
    images: [],
    price: 599,
    category: "corporates",
    subCategory: "funfriday",
    description: "Lightweight snack pack for office Fun-Friday activities.",
  },
  {
    id: "corp-funfriday-2",
    name: "Fun-Friday Hamper - Games",
    image: "https://picsum.photos/seed/corp-funfriday-2/600/400",
    images: [],
    price: 899,
    category: "corporates",
    subCategory: "funfriday",
    description: "Small games & treats bundle to boost team morale.",
  },

  // CORPORATE - subCategory: premium
  {
    id: "corp-premium-1",
    name: "Premium Thank-you Hamper - A",
    image: "https://picsum.photos/seed/corp-premium-1/600/400",
    images: [],
    price: 2999,
    category: "corporates",
    subCategory: "premium",
    description: "Luxury thank-you hamper for VIP clients and executives.",
  },
  {
    id: "corp-premium-2",
    name: "Premium Thank-you Hamper - B",
    image: "https://picsum.photos/seed/corp-premium-2/600/400",
    images: [],
    price: 3999,
    category: "corporates",
    subCategory: "premium",
    description:
      "Executive hamper with dry fruits, chocolates and premium packaging.",
  },

  // CORPORATE - subCategory: partnership
  {
    id: "corp-partnership-1",
    name: "Partnership Welcome Box - A",
    image: "https://picsum.photos/seed/corp-partnership-1/600/400",
    images: [],
    price: 1899,
    category: "corporates",
    subCategory: "partnership",
    description: "Welcome box for new partners with branded items.",
  },
  {
    id: "corp-partnership-2",
    name: "Partnership Welcome Box - B",
    image: "https://picsum.photos/seed/corp-partnership-2/600/400",
    images: [],
    price: 2499,
    category: "corporates",
    subCategory: "partnership",
    description: "Deluxe partner welcome kit with premium samples.",
  },

  // CORPORATE - subCategory: eco
  {
    id: "corp-eco-1",
    name: "Eco Promotional Gift - A",
    image: "https://picsum.photos/seed/corp-eco-1/600/400",
    images: [],
    price: 699,
    category: "corporates",
    subCategory: "eco",
    description:
      "Eco-friendly corporate gifts with jute and sustainable items.",
  },
  {
    id: "corp-eco-2",
    name: "Eco Promotional Gift - B",
    image: "https://picsum.photos/seed/corp-eco-2/600/400",
    images: [],
    price: 999,
    category: "corporates",
    subCategory: "eco",
    description: "Sustainable gift set for corporate branding.",
  },

  // CORPORATE - subCategory: samples
  {
    id: "corp-samples-1",
    name: "Product Samples / Launch Kit - A",
    image: "https://picsum.photos/seed/corp-samples-1/600/400",
    images: [],
    price: 1199,
    category: "corporates",
    subCategory: "samples",
    description: "Sample kit for product launches and demos.",
  },
  {
    id: "corp-samples-2",
    name: "Product Samples / Launch Kit - B",
    image: "https://picsum.photos/seed/corp-samples-2/600/400",
    images: [],
    price: 1599,
    category: "corporates",
    subCategory: "samples",
    description: "Extended launch kit with multiple product samples.",
  },

  // === CORPORATE ITEMS END ===

  // === OCCASIONAL ITEMS (used by OccasionalGifts page) START ===
  // These product objects were added for the Occasional Gifts page and are grouped
  // here so you can find and edit them easily. Each has `category: 'occasional-gifts'`
  // and a `subCategory` value used by the occasional page strip.

  // OCCASIONAL - subCategory: wedding
  {
    id: "occ-wedding-1",
    name: "Wedding Gourmet Hamper",
    image: "https://picsum.photos/seed/occ-wedding-1/600/400",
    images: [],
    price: 2499,
    category: "occasional-gifts",
    subCategory: "wedding",
    description:
      "A curated wedding hamper with sweets, dry fruits and a congratulatory card.",
  },
  {
    id: "occ-wedding-2",
    name: "Wedding Celebration Box",
    image: "https://picsum.photos/seed/occ-wedding-2/600/400",
    images: [],
    price: 2999,
    category: "occasional-gifts",
    subCategory: "wedding",
    description: "Premium wedding hamper with gourmet treats and keepsakes.",
  },

  // OCCASIONAL - subCategory: engagement
  {
    id: "occ-engagement-1",
    name: "Engagement Celebration Box",
    image: "https://picsum.photos/seed/occ-engagement-1/600/400",
    images: [],
    price: 1799,
    category: "occasional-gifts",
    subCategory: "engagement",
    description: "Elegant snacks & keepsakes box for engagement parties.",
  },
  {
    id: "occ-engagement-2",
    name: "Engagement Keepsake Hamper",
    image: "https://picsum.photos/seed/occ-engagement-2/600/400",
    images: [],
    price: 2199,
    category: "occasional-gifts",
    subCategory: "engagement",
    description: "Keepsake hamper with personalized greeting and treats.",
  },

  // OCCASIONAL - subCategory: anniversary
  {
    id: "occ-anniversary-1",
    name: "Anniversary Delight Hamper",
    image: "https://picsum.photos/seed/occ-anniversary-1/600/400",
    images: [],
    price: 1999,
    category: "occasional-gifts",
    subCategory: "anniversary",
    description: "Classic anniversary hamper with chocolates and dry fruits.",
  },
  {
    id: "occ-anniversary-2",
    name: "Anniversary Premium Hamper",
    image: "https://picsum.photos/seed/occ-anniversary-2/600/400",
    images: [],
    price: 2599,
    category: "occasional-gifts",
    subCategory: "anniversary",
    description: "Deluxe anniversary hamper with fine chocolates and wine.",
  },

  // OCCASIONAL - subCategory: baby-shower
  {
    id: "occ-babyshower-1",
    name: "Baby Shower Gift Set",
    image: "https://picsum.photos/seed/occ-babyshower-1/600/400",
    images: [],
    price: 1299,
    category: "occasional-gifts",
    subCategory: "baby-shower",
    description:
      "Soft toys and pamper items curated for baby shower celebrations.",
  },
  {
    id: "occ-babyshower-2",
    name: "Baby Welcome Hamper",
    image: "https://picsum.photos/seed/occ-babyshower-2/600/400",
    images: [],
    price: 1599,
    category: "occasional-gifts",
    subCategory: "baby-shower",
    description: "Welcome hamper with baby essentials and a keepsake card.",
  },

  // OCCASIONAL - subCategory: mothers-day
  {
    id: "occ-mothersday-1",
    name: "Mother's Day Pamper Box",
    image: "https://picsum.photos/seed/occ-mothersday-1/600/400",
    images: [],
    price: 999,
    category: "occasional-gifts",
    subCategory: "mothers-day",
    description: "A thoughtful pamper box to celebrate Mother's Day.",
  },
  {
    id: "occ-mothersday-2",
    name: "Mother's Day Deluxe Set",
    image: "https://picsum.photos/seed/occ-mothersday-2/600/400",
    images: [],
    price: 1499,
    category: "occasional-gifts",
    subCategory: "mothers-day",
    description: "Deluxe pamper set with beauty treats and a floral card.",
  },

  // OCCASIONAL - subCategory: fathers-day
  {
    id: "occ-fathersday-1",
    name: "Father's Day Classic Kit",
    image: "https://picsum.photos/seed/occ-fathersday-1/600/400",
    images: [],
    price: 899,
    category: "occasional-gifts",
    subCategory: "fathers-day",
    description: "Grooming and snack set to appreciate dads on Father's Day.",
  },
  {
    id: "occ-fathersday-2",
    name: "Father's Day Premium Hamper",
    image: "https://picsum.photos/seed/occ-fathersday-2/600/400",
    images: [],
    price: 1299,
    category: "occasional-gifts",
    subCategory: "fathers-day",
    description: "Premium grooming hamper with artisanal snacks.",
  },

  // OCCASIONAL - subCategory: childrens-day
  {
    id: "occ-childrensday-1",
    name: "Children's Day Fun Hamper",
    image: "https://picsum.photos/seed/occ-childrensday-1/600/400",
    images: [],
    price: 699,
    category: "occasional-gifts",
    subCategory: "childrens-day",
    description: "Playful treats and small toys for Children's Day.",
  },
  {
    id: "occ-childrensday-2",
    name: "Children's Party Pack",
    image: "https://picsum.photos/seed/occ-childrensday-2/600/400",
    images: [],
    price: 899,
    category: "occasional-gifts",
    subCategory: "childrens-day",
    description: "Party-friendly snacks and activity kits for kids.",
  },

  // OCCASIONAL - subCategory: friendship-day
  {
    id: "occ-friendship-1",
    name: "Friendship Day Delight",
    image: "https://picsum.photos/seed/occ-friendship-1/600/400",
    images: [],
    price: 549,
    category: "occasional-gifts",
    subCategory: "friendship-day",
    description: "Small token gifts perfect for Friendship Day exchanges.",
  },
  {
    id: "occ-friendship-2",
    name: "Friendship Goodie Box",
    image: "https://picsum.photos/seed/occ-friendship-2/600/400",
    images: [],
    price: 799,
    category: "occasional-gifts",
    subCategory: "friendship-day",
    description: "Goodie box with treats and a message card for friends.",
  },

  // OCCASIONAL - subCategory: achievement
  {
    id: "occ-achievement-1",
    name: "Achievement Celebration Pack",
    image: "https://picsum.photos/seed/occ-achievement-1/600/400",
    images: [],
    price: 1199,
    category: "occasional-gifts",
    subCategory: "achievement",
    description: "Congratulatory hamper for milestone achievements and wins.",
  },
  {
    id: "occ-achievement-2",
    name: "Achievement Premium Set",
    image: "https://picsum.photos/seed/occ-achievement-2/600/400",
    images: [],
    price: 1599,
    category: "occasional-gifts",
    subCategory: "achievement",
    description: "Premium congratulatory set with keepsakes and treats.",
  },

  // OCCASIONAL - subCategory: retirement
  {
    id: "occ-retirement-1",
    name: "Retirement Farewell Hamper",
    image: "https://picsum.photos/seed/occ-retirement-1/600/400",
    images: [],
    price: 1899,
    category: "occasional-gifts",
    subCategory: "retirement",
    description: "Tasteful hamper to send off colleagues into retirement.",
  },
  {
    id: "occ-retirement-2",
    name: "Retirement Keepsake Box",
    image: "https://picsum.photos/seed/occ-retirement-2/600/400",
    images: [],
    price: 2299,
    category: "occasional-gifts",
    subCategory: "retirement",
    description: "A keepsake hamper with personalized items for retirees.",
  },

  // OCCASIONAL - subCategory: farewell
  {
    id: "occ-farewell-1",
    name: "Farewell Keepsake Box",
    image: "https://picsum.photos/seed/occ-farewell-1/600/400",
    images: [],
    price: 799,
    category: "occasional-gifts",
    subCategory: "farewell",
    description: "A small keepsake and treats box to say goodbye warmly.",
  },
  {
    id: "occ-farewell-2",
    name: "Farewell Memories Hamper",
    image: "https://picsum.photos/seed/occ-farewell-2/600/400",
    images: [],
    price: 1199,
    category: "occasional-gifts",
    subCategory: "farewell",
    description: "Memory-filled hamper to send off teams and colleagues.",
  },

  // OCCASIONAL - subCategory: picnic-hampers
  {
    id: "occ-picnic-1",
    name: "Picnic Hamper Essentials",
    image: "https://picsum.photos/seed/occ-picnic-1/600/400",
    images: [],
    price: 1499,
    category: "occasional-gifts",
    subCategory: "picnic-hampers",
    description: "A compact picnic hamper with snacks and a picnic blanket.",
  },
  {
    id: "occ-picnic-2",
    name: "Deluxe Picnic Hamper",
    image: "https://picsum.photos/seed/occ-picnic-2/600/400",
    images: [],
    price: 2199,
    category: "occasional-gifts",
    subCategory: "picnic-hampers",
    description: "Large picnic hamper with gourmet snacks and utensils.",
  },

  // === OCCASIONAL ITEMS END ===

  // === FESTIVAL ITEMS (festival-gifts) START ===

  // Diwali Gifts
  {
    id: "fest-diwali-1",
    name: "Diwali Deluxe Hamper",
    image: "https://picsum.photos/seed/fest-diwali-1/600/400",
    images: [],
    price: 1999,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
    description:
      "A celebratory Diwali hamper with sweets, diyas and dry fruits.",
  },
  {
    id: "fest-diwali-2",
    name: "Diwali Sweets & Decor Box",
    image: "https://picsum.photos/seed/fest-diwali-2/600/400",
    images: [],
    price: 1299,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
    description: "Traditional sweets and decor items for Diwali celebrations.",
  },
  {
    id: "fest-diwali-3",
    name: "Diwali Corporate Hamper",
    image: "https://picsum.photos/seed/fest-diwali-3/600/400",
    images: [],
    price: 2499,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
    description: "Premium Diwali hamper ideal for corporate gifting.",
  },
  {
    id: "fest-diwali-4",
    name: "Diwali Mini Gift Set",
    image: "https://picsum.photos/seed/fest-diwali-4/600/400",
    images: [],
    price: 699,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
    description: "Compact Diwali set with sweets and small diyas.",
  },

  // Holi Hampers
  {
    id: "fest-holi-1",
    name: "Holi Colour & Sweets Hamper",
    image: "https://picsum.photos/seed/fest-holi-1/600/400",
    images: [],
    price: 899,
    category: "festival-gifts",
    subCategory: "holi-hampers",
    description: "Bright Holi hamper with gujiyas and colour packs.",
  },
  {
    id: "fest-holi-2",
    name: "Holi Family Hamper",
    image: "https://picsum.photos/seed/fest-holi-2/600/400",
    images: [],
    price: 1199,
    category: "festival-gifts",
    subCategory: "holi-hampers",
    description: "A family-sized Holi hamper with sweets and colours.",
  },
  {
    id: "fest-holi-3",
    name: "Holi Kids Pack",
    image: "https://picsum.photos/seed/fest-holi-3/600/400",
    images: [],
    price: 599,
    category: "festival-gifts",
    subCategory: "holi-hampers",
    description: "Fun Holi pack for kids with safe colours and treats.",
  },
  {
    id: "fest-holi-4",
    name: "Holi Gourmet Hamper",
    image: "https://picsum.photos/seed/fest-holi-4/600/400",
    images: [],
    price: 1499,
    category: "festival-gifts",
    subCategory: "holi-hampers",
    description: "Gourmet sweets and savoury snacks perfect for Holi.",
  },

  // Raksha Bandhan Hampers
  {
    id: "fest-raksha-1",
    name: "Raksha Bandhan Keepsake Hamper",
    image: "https://picsum.photos/seed/fest-raksha-1/600/400",
    images: [],
    price: 1099,
    category: "festival-gifts",
    subCategory: "raksha-bandhan-hampers",
    description:
      "A thoughtful Raksha Bandhan set with sweets and gift keepsakes.",
  },
  {
    id: "fest-raksha-2",
    name: "Raksha Sibling Hamper",
    image: "https://picsum.photos/seed/fest-raksha-2/600/400",
    images: [],
    price: 899,
    category: "festival-gifts",
    subCategory: "raksha-bandhan-hampers",
    description: "Sweet hampers curated especially for siblings.",
  },
  {
    id: "fest-raksha-3",
    name: "Raksha Premium Gift Box",
    image: "https://picsum.photos/seed/fest-raksha-3/600/400",
    images: [],
    price: 1599,
    category: "festival-gifts",
    subCategory: "raksha-bandhan-hampers",
    description: "Premium box with chocolates and keepsakes.",
  },
  {
    id: "fest-raksha-4",
    name: "Raksha Classic Set",
    image: "https://picsum.photos/seed/fest-raksha-4/600/400",
    images: [],
    price: 699,
    category: "festival-gifts",
    subCategory: "raksha-bandhan-hampers",
    description: "Classic rakhi set with sweets and a small gift.",
  },

  // Eid Gifts
  {
    id: "fest-eid-1",
    name: "Eid Celebration Box",
    image: "https://picsum.photos/seed/fest-eid-1/600/400",
    images: [],
    price: 1299,
    category: "festival-gifts",
    subCategory: "eid-gifts",
    description: "Traditional Eid sweets and savory treats in a beautiful box.",
  },
  {
    id: "fest-eid-2",
    name: "Eid Family Hamper",
    image: "https://picsum.photos/seed/fest-eid-2/600/400",
    images: [],
    price: 1799,
    category: "festival-gifts",
    subCategory: "eid-gifts",
    description: "Large Eid hamper perfect for family gatherings.",
  },
  {
    id: "fest-eid-3",
    name: "Eid Sweets Pack",
    image: "https://picsum.photos/seed/fest-eid-3/600/400",
    images: [],
    price: 799,
    category: "festival-gifts",
    subCategory: "eid-gifts",
    description: "Box of assorted traditional sweets for Eid.",
  },
  {
    id: "fest-eid-4",
    name: "Eid Deluxe Hamper",
    image: "https://picsum.photos/seed/fest-eid-4/600/400",
    images: [],
    price: 2199,
    category: "festival-gifts",
    subCategory: "eid-gifts",
    description: "Deluxe Eid hamper with premium treats and dates.",
  },

  // Christmas Gifts
  {
    id: "fest-christmas-1",
    name: "Christmas Gift Hamper",
    image: "https://picsum.photos/seed/fest-christmas-1/600/400",
    images: [],
    price: 1599,
    category: "festival-gifts",
    subCategory: "christmas-gifts",
    description: "Festive Christmas hamper with cookies, chocolates and decor.",
  },
  {
    id: "fest-christmas-2",
    name: "Christmas Family Box",
    image: "https://picsum.photos/seed/fest-christmas-2/600/400",
    images: [],
    price: 1999,
    category: "festival-gifts",
    subCategory: "christmas-gifts",
    description: "Family-sized Christmas hamper with assorted treats.",
  },
  {
    id: "fest-christmas-3",
    name: "Christmas Cookies & More",
    image: "https://picsum.photos/seed/fest-christmas-3/600/400",
    images: [],
    price: 899,
    category: "festival-gifts",
    subCategory: "christmas-gifts",
    description: "A selection of festive cookies and sweet treats.",
  },
  {
    id: "fest-christmas-4",
    name: "Christmas Premium Hamper",
    image: "https://picsum.photos/seed/fest-christmas-4/600/400",
    images: [],
    price: 2499,
    category: "festival-gifts",
    subCategory: "christmas-gifts",
    description: "Premium hamper with chocolates, wine and decor items.",
  },

  // New Year Gifts
  {
    id: "fest-newyear-1",
    name: "New Year Celebration Pack",
    image: "https://picsum.photos/seed/fest-newyear-1/600/400",
    images: [],
    price: 1399,
    category: "festival-gifts",
    subCategory: "new-year-gifts",
    description: "Ring in the New Year with snacks and celebratory treats.",
  },
  {
    id: "fest-newyear-2",
    name: "New Year Party Box",
    image: "https://picsum.photos/seed/fest-newyear-2/600/400",
    images: [],
    price: 1599,
    category: "festival-gifts",
    subCategory: "new-year-gifts",
    description: "Party-ready snacks and treats for New Year celebrations.",
  },
  {
    id: "fest-newyear-3",
    name: "New Year Gourmet Set",
    image: "https://picsum.photos/seed/fest-newyear-3/600/400",
    images: [],
    price: 1799,
    category: "festival-gifts",
    subCategory: "new-year-gifts",
    description: "Gourmet selection to welcome the New Year.",
  },
  {
    id: "fest-newyear-4",
    name: "New Year Mini Pack",
    image: "https://picsum.photos/seed/fest-newyear-4/600/400",
    images: [],
    price: 799,
    category: "festival-gifts",
    subCategory: "new-year-gifts",
    description: "Small celebratory pack ideal for gifting.",
  },

  // Navratri Gifts
  {
    id: "fest-navratri-1",
    name: "Navratri Festive Hamper",
    image: "https://picsum.photos/seed/fest-navratri-1/600/400",
    images: [],
    price: 1199,
    category: "festival-gifts",
    subCategory: "navratri-gifts",
    description: "Seasonal Navratri hamper with traditional sweets and snacks.",
  },
  {
    id: "fest-navratri-2",
    name: "Navratri Family Box",
    image: "https://picsum.photos/seed/fest-navratri-2/600/400",
    images: [],
    price: 1399,
    category: "festival-gifts",
    subCategory: "navratri-gifts",
    description: "Family-sized Navratri hamper with regional treats.",
  },
  {
    id: "fest-navratri-3",
    name: "Navratri Sweets Pack",
    image: "https://picsum.photos/seed/fest-navratri-3/600/400",
    images: [],
    price: 899,
    category: "festival-gifts",
    subCategory: "navratri-gifts",
    description: "Assorted sweets for Navratri celebrations.",
  },
  {
    id: "fest-navratri-4",
    name: "Navratri Premium Hamper",
    image: "https://picsum.photos/seed/fest-navratri-4/600/400",
    images: [],
    price: 1999,
    category: "festival-gifts",
    subCategory: "navratri-gifts",
    description: "Premium hamper with festive specialties.",
  },

  // Thanksgiving Gifts
  {
    id: "fest-thanksgiving-1",
    name: "Thanksgiving Gourmet Box",
    image: "https://picsum.photos/seed/fest-thanksgiving-1/600/400",
    images: [],
    price: 1499,
    category: "festival-gifts",
    subCategory: "thanksgiving-gifts",
    description: "Gourmet hamper perfect for Thanksgiving gatherings.",
  },
  {
    id: "fest-thanksgiving-2",
    name: "Thanksgiving Family Hamper",
    image: "https://picsum.photos/seed/fest-thanksgiving-2/600/400",
    images: [],
    price: 1799,
    category: "festival-gifts",
    subCategory: "thanksgiving-gifts",
    description: "Family-sized hamper for a Thanksgiving feast.",
  },
  {
    id: "fest-thanksgiving-3",
    name: "Thanksgiving Treats Box",
    image: "https://picsum.photos/seed/fest-thanksgiving-3/600/400",
    images: [],
    price: 999,
    category: "festival-gifts",
    subCategory: "thanksgiving-gifts",
    description: "A selection of seasonal treats for Thanksgiving.",
  },
  {
    id: "fest-thanksgiving-4",
    name: "Thanksgiving Deluxe Hamper",
    image: "https://picsum.photos/seed/fest-thanksgiving-4/600/400",
    images: [],
    price: 2299,
    category: "festival-gifts",
    subCategory: "thanksgiving-gifts",
    description: "Deluxe hamper with gourmet specialties.",
  },

  // Valentine's Day Gifts
  {
    id: "fest-valentine-1",
    name: "Valentine's Romantic Hamper",
    image: "https://picsum.photos/seed/fest-valentine-1/600/400",
    images: [],
    price: 999,
    category: "festival-gifts",
    subCategory: "valentines-day-gifts",
    description: "A romantic hamper with chocolates and a keepsake card.",
  },
  {
    id: "fest-valentine-2",
    name: "Valentine's Couple Box",
    image: "https://picsum.photos/seed/fest-valentine-2/600/400",
    images: [],
    price: 1299,
    category: "festival-gifts",
    subCategory: "valentines-day-gifts",
    description: "Couples' gift box with sweets and a card.",
  },
  {
    id: "fest-valentine-3",
    name: "Valentine's Chocolate Hamper",
    image: "https://picsum.photos/seed/fest-valentine-3/600/400",
    images: [],
    price: 799,
    category: "festival-gifts",
    subCategory: "valentines-day-gifts",
    description: "Chocolate-focused hamper perfect for Valentine's Day.",
  },
  {
    id: "fest-valentine-4",
    name: "Valentine's Premium Set",
    image: "https://picsum.photos/seed/fest-valentine-4/600/400",
    images: [],
    price: 1699,
    category: "festival-gifts",
    subCategory: "valentines-day-gifts",
    description: "Premium romantic hamper with keepsakes and treats.",
  },

  // Easter Hampers
  {
    id: "fest-easter-1",
    name: "Easter Sweets Hamper",
    image: "https://picsum.photos/seed/fest-easter-1/600/400",
    images: [],
    price: 799,
    category: "festival-gifts",
    subCategory: "easter-hampers",
    description: "Easter hamper with themed sweets and goodies.",
  },
  {
    id: "fest-easter-2",
    name: "Easter Family Box",
    image: "https://picsum.photos/seed/fest-easter-2/600/400",
    images: [],
    price: 999,
    category: "festival-gifts",
    subCategory: "easter-hampers",
    description: "Family-friendly Easter hamper with treats.",
  },
  {
    id: "fest-easter-3",
    name: "Easter Kids Pack",
    image: "https://picsum.photos/seed/fest-easter-3/600/400",
    images: [],
    price: 599,
    category: "festival-gifts",
    subCategory: "easter-hampers",
    description: "Kids-focused Easter pack with chocolates and toys.",
  },
  {
    id: "fest-easter-4",
    name: "Easter Gourmet Hamper",
    image: "https://picsum.photos/seed/fest-easter-4/600/400",
    images: [],
    price: 1199,
    category: "festival-gifts",
    subCategory: "easter-hampers",
    description: "Gourmet Easter hamper with premium sweets.",
  },

  // Lohri Hampers
  {
    id: "fest-lohri-1",
    name: "Lohri Traditional Hamper",
    image: "https://picsum.photos/seed/fest-lohri-1/600/400",
    images: [],
    price: 899,
    category: "festival-gifts",
    subCategory: "lohri-hampers",
    description: "Lohri hamper with traditional treats and sesame sweets.",
  },
  {
    id: "fest-lohri-2",
    name: "Lohri Family Hamper",
    image: "https://picsum.photos/seed/fest-lohri-2/600/400",
    images: [],
    price: 1199,
    category: "festival-gifts",
    subCategory: "lohri-hampers",
    description: "Family-sized Lohri hamper with sweet treats.",
  },
  {
    id: "fest-lohri-3",
    name: "Lohri Sweets Pack",
    image: "https://picsum.photos/seed/fest-lohri-3/600/400",
    images: [],
    price: 699,
    category: "festival-gifts",
    subCategory: "lohri-hampers",
    description: "Traditional sweets pack for Lohri celebrations.",
  },
  {
    id: "fest-lohri-4",
    name: "Lohri Premium Hamper",
    image: "https://picsum.photos/seed/fest-lohri-4/600/400",
    images: [],
    price: 1499,
    category: "festival-gifts",
    subCategory: "lohri-hampers",
    description: "Premium Lohri hamper with curated items.",
  },

  // Onam Hampers
  {
    id: "fest-onam-1",
    name: "Onam Celebration Hamper",
    image: "https://picsum.photos/seed/fest-onam-1/600/400",
    images: [],
    price: 1299,
    category: "festival-gifts",
    subCategory: "onam-hampers",
    description: "Onam hamper with regional sweets and curated gifts.",
  },
  {
    id: "fest-onam-2",
    name: "Onam Family Hamper",
    image: "https://picsum.photos/seed/fest-onam-2/600/400",
    images: [],
    price: 1599,
    category: "festival-gifts",
    subCategory: "onam-hampers",
    description: "Family-sized Onam hamper with traditional items.",
  },
  {
    id: "fest-onam-3",
    name: "Onam Sweets Box",
    image: "https://picsum.photos/seed/fest-onam-3/600/400",
    images: [],
    price: 999,
    category: "festival-gifts",
    subCategory: "onam-hampers",
    description: "Sweets box curated for Onam festivities.",
  },
  {
    id: "fest-onam-4",
    name: "Onam Premium Hamper",
    image: "https://picsum.photos/seed/fest-onam-4/600/400",
    images: [],
    price: 1999,
    category: "festival-gifts",
    subCategory: "onam-hampers",
    description: "Premium Onam hamper with regional specialties.",
  },

  // === FESTIVAL ITEMS END ===

  // === CHARITY ITEMS (charity-gifts) START ===

  // Charity Hampers for Kids
  {
    id: "charity-kids-1",
    name: "Kids Charity Hamper - Essentials A",
    image: "https://picsum.photos/seed/charity-kids-1/600/400",
    images: [],
    price: 499,
    category: "charity-gifts",
    subCategory: "kids",
    description: "Basic essentials and treats for kids in need.",
  },
  {
    id: "charity-kids-2",
    name: "Kids Charity Hamper - Essentials B",
    image: "https://picsum.photos/seed/charity-kids-2/600/400",
    images: [],
    price: 599,
    category: "charity-gifts",
    subCategory: "kids",
    description: "Clothing and snacks packed for children.",
  },
  {
    id: "charity-kids-3",
    name: "Kids Activity & Snack Pack",
    image: "https://picsum.photos/seed/charity-kids-3/600/400",
    images: [],
    price: 549,
    category: "charity-gifts",
    subCategory: "kids",
    description: "Fun activity set with educational goodies and snacks.",
  },
  {
    id: "charity-kids-4",
    name: "Kids Warm Winter Pack",
    image: "https://picsum.photos/seed/charity-kids-4/600/400",
    images: [],
    price: 699,
    category: "charity-gifts",
    subCategory: "kids",
    description: "Warm clothing and treats for colder months.",
  },

  // Charity Hampers for Teens
  {
    id: "charity-teens-1",
    name: "Teens Care Pack - Study & Snacks A",
    image: "https://picsum.photos/seed/charity-teens-1/600/400",
    images: [],
    price: 699,
    category: "charity-gifts",
    subCategory: "teens",
    description: "Study supplies and nutritious snacks for teens.",
  },
  {
    id: "charity-teens-2",
    name: "Teens Care Pack - Study & Snacks B",
    image: "https://picsum.photos/seed/charity-teens-2/600/400",
    images: [],
    price: 749,
    category: "charity-gifts",
    subCategory: "teens",
    description: "Back-to-school essentials and snack items.",
  },
  {
    id: "charity-teens-3",
    name: "Teens Hygiene & Snack Box",
    image: "https://picsum.photos/seed/charity-teens-3/600/400",
    images: [],
    price: 649,
    category: "charity-gifts",
    subCategory: "teens",
    description: "Hygiene essentials plus healthy snack options.",
  },
  {
    id: "charity-teens-4",
    name: "Teens Essentials Pack",
    image: "https://picsum.photos/seed/charity-teens-4/600/400",
    images: [],
    price: 799,
    category: "charity-gifts",
    subCategory: "teens",
    description: "A comprehensive pack for teen needs.",
  },

  // Charity Hampers for Adults
  {
    id: "charity-adults-1",
    name: "Adults Care Hamper - Basics",
    image: "https://picsum.photos/seed/charity-adults-1/600/400",
    images: [],
    price: 899,
    category: "charity-gifts",
    subCategory: "adults",
    description: "Basic food and hygiene essentials for adults.",
  },
  {
    id: "charity-adults-2",
    name: "Adults Wellness Pack",
    image: "https://picsum.photos/seed/charity-adults-2/600/400",
    images: [],
    price: 999,
    category: "charity-gifts",
    subCategory: "adults",
    description: "Nutritious snacks and wellness items for adults.",
  },
  {
    id: "charity-adults-3",
    name: "Adults Family Essentials",
    image: "https://picsum.photos/seed/charity-adults-3/600/400",
    images: [],
    price: 1199,
    category: "charity-gifts",
    subCategory: "adults",
    description: "Family-focused essentials and food items.",
  },
  {
    id: "charity-adults-4",
    name: "Adults Comfort Box",
    image: "https://picsum.photos/seed/charity-adults-4/600/400",
    images: [],
    price: 1099,
    category: "charity-gifts",
    subCategory: "adults",
    description: "Comfort items and packaged food for adults.",
  },

  // Charity Hampers for Elderly
  {
    id: "charity-elderly-1",
    name: "Elderly Care Hamper - Essentials",
    image: "https://picsum.photos/seed/charity-elderly-1/600/400",
    images: [],
    price: 999,
    category: "charity-gifts",
    subCategory: "elderly",
    description: "Gentle-care and nutrition packs for the elderly.",
  },
  {
    id: "charity-elderly-2",
    name: "Elderly Comfort Box",
    image: "https://picsum.photos/seed/charity-elderly-2/600/400",
    images: [],
    price: 1199,
    category: "charity-gifts",
    subCategory: "elderly",
    description: "Warm clothing and gentle snacks for seniors.",
  },
  {
    id: "charity-elderly-3",
    name: "Elderly Wellness Pack",
    image: "https://picsum.photos/seed/charity-elderly-3/600/400",
    images: [],
    price: 1299,
    category: "charity-gifts",
    subCategory: "elderly",
    description: "Health-focused essentials and easy-to-eat foods.",
  },
  {
    id: "charity-elderly-4",
    name: "Elderly Care Premium",
    image: "https://picsum.photos/seed/charity-elderly-4/600/400",
    images: [],
    price: 1499,
    category: "charity-gifts",
    subCategory: "elderly",
    description: "Premium comfort and care items for elderly recipients.",
  },

  // Special Kids Charity Hampers
  {
    id: "charity-specialkids-1",
    name: "Special Kids Sensory Pack",
    image: "https://picsum.photos/seed/charity-specialkids-1/600/400",
    images: [],
    price: 899,
    category: "charity-gifts",
    subCategory: "special-kids",
    description: "Sensory toys and gentle snacks for special-needs kids.",
  },
  {
    id: "charity-specialkids-2",
    name: "Special Kids Care Box",
    image: "https://picsum.photos/seed/charity-specialkids-2/600/400",
    images: [],
    price: 999,
    category: "charity-gifts",
    subCategory: "special-kids",
    description: "Tailored care items and treats for special kids.",
  },
  {
    id: "charity-specialkids-3",
    name: "Special Kids Activity Set",
    image: "https://picsum.photos/seed/charity-specialkids-3/600/400",
    images: [],
    price: 799,
    category: "charity-gifts",
    subCategory: "special-kids",
    description: "Engaging activity set suitable for varied abilities.",
  },
  {
    id: "charity-specialkids-4",
    name: "Special Kids Care Premium",
    image: "https://picsum.photos/seed/charity-specialkids-4/600/400",
    images: [],
    price: 1199,
    category: "charity-gifts",
    subCategory: "special-kids",
    description: "Premium sets with supportive care items.",
  },

  // Charity Hampers for Widows
  {
    id: "charity-widows-1",
    name: "Widows Support Hamper A",
    image: "https://picsum.photos/seed/charity-widows-1/600/400",
    images: [],
    price: 899,
    category: "charity-gifts",
    subCategory: "widows",
    description: "Supportive packages with essentials and comfort items.",
  },
  {
    id: "charity-widows-2",
    name: "Widows Support Hamper B",
    image: "https://picsum.photos/seed/charity-widows-2/600/400",
    images: [],
    price: 999,
    category: "charity-gifts",
    subCategory: "widows",
    description: "Care and support items for widows and families.",
  },
  {
    id: "charity-widows-3",
    name: "Widows Essentials Box",
    image: "https://picsum.photos/seed/charity-widows-3/600/400",
    images: [],
    price: 799,
    category: "charity-gifts",
    subCategory: "widows",
    description: "Essentials kit with food and hygiene items.",
  },
  {
    id: "charity-widows-4",
    name: "Widows Comfort Hamper",
    image: "https://picsum.photos/seed/charity-widows-4/600/400",
    images: [],
    price: 1299,
    category: "charity-gifts",
    subCategory: "widows",
    description: "Comforting hamper with treats and a keepsake.",
  },

  // All-Age Inclusive Charity Hampers
  {
    id: "charity-allage-1",
    name: "All-Age Inclusive Hamper - Basics",
    image: "https://picsum.photos/seed/charity-allage-1/600/400",
    images: [],
    price: 999,
    category: "charity-gifts",
    subCategory: "all-age-inclusive",
    description: "Inclusive hamper designed for recipients of any age.",
  },
  {
    id: "charity-allage-2",
    name: "All-Age Family Hamper",
    image: "https://picsum.photos/seed/charity-allage-2/600/400",
    images: [],
    price: 1299,
    category: "charity-gifts",
    subCategory: "all-age-inclusive",
    description: "Family-sized inclusive hamper with mixed items.",
  },
  {
    id: "charity-allage-3",
    name: "All-Age Essentials Box",
    image: "https://picsum.photos/seed/charity-allage-3/600/400",
    images: [],
    price: 899,
    category: "charity-gifts",
    subCategory: "all-age-inclusive",
    description: "Essentials and treats suitable for diverse recipients.",
  },
  {
    id: "charity-allage-4",
    name: "All-Age Premium Hamper",
    image: "https://picsum.photos/seed/charity-allage-4/600/400",
    images: [],
    price: 1599,
    category: "charity-gifts",
    subCategory: "all-age-inclusive",
    description: "Premium inclusive hamper with curated items.",
  },

  // === CHARITY ITEMS END ===
];

export const topPicks: Product[] = products.slice(0, 8);

export function getById(id: string) {
  return products.find((p) => p.id === id);
}

export function listByCategory(cat?: string) {
  if (!cat) return products;
  return products.filter((p) => p.category === cat);
}

export function searchProducts(q: string) {
  const s = q.toLowerCase();
  return products.filter((p) => p.name.toLowerCase().includes(s));
}
