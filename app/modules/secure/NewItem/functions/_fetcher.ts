// import { api, filterControl, getScopedParams } from "arkyn_utils";
// import { generateURL } from "~/server/utils";
// import { schemas } from "../_schemas";

type FetcherProps = {
  request: Request;
  token: string;
  account_id: string;
};

export async function fetcher(props: FetcherProps) {
  // const { account_id, request, token } = props;
  // const { user_fetcher } = schemas;

  // const filterParams = getScopedParams(request);
  // const filters = filterControl(
  //   ["search", "strDate", "endDate", "limit", "page"],
  //   filterParams
  // );

  // const userURL = generateURL(`/${account_id}/user${filters}`, request);

  // const fetcherResponse = await api.FETCHER({
  //   users: [user_fetcher, userURL, { token, cached: userURL + token }],
  // });

  const fetcherResponse = {
    collection: {
      data: [
        {
          code: "123456789",
          name: "Obra de arte 1",
          description: "Descrição obra 1",
          image:
            "https://s3-alpha-sig.figma.com/img/c3a7/4742/4a4282314d1a04843c4973a28e606dc2?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IjNPvU6H-1thGw00NhImt1XAtMGCREkPJvmZqPNQLVifn7WBL5b4uM898EVcXFdVA~G1psGJ2JNWFsgZ7FlEMHnsGnX3vXAbq2JqKRmrA0Hbia6zMGaP2gJPN5w6HllsFy6~z4dvWhgw6toWXxXSV8N~ox-2AK-VK5cflPXEBpFgyy9WMuHIyWuPHwacMFKmecxOLm0ksouAOAMn0R-BOhbaSNwijlR8EU8czfJixbFWa6pnu9sDM8GqzJ7MRKOczKI0Gz~khcPAEDzIjdUtZqZZNalXuvTmHLU8esKFLXlhxPKBPi5OvNqzqxxBv6mQgRtusf2RUo2Lv4X3Mx2GSg__",
          audio: "https://audio.com",
          qrcode_image:
            "https://lh3.googleusercontent.com/pw/AP1GczMvUMeLt1IpaIYmtQHW2FnrmsCyU3Rs8prVMdP51jtbi5EDfuUYMO-1oQUTwng8r1uAo1K7PhpO2kH0eO7iaec97smBwCTFnI_6WOoMQ0CWLxvpDo-aMlzuplsSbkV1EDetVFB07n5TFLqIja390-E=w823-h824-s-no-gm?authuser=0",
          qrcode_link: "https://photos.app.goo.gl/uLeC7utPDTth1EBu9",
        },
        {
          code: "123456788",
          name: "Obra de arte 2",
          description: "Descrição obra 2",
          image:
            "https://s3-alpha-sig.figma.com/img/72be/24f4/5e00748b246e0ebc3807572de7b4a4aa?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qwQ6MSTN3zq-R-LIen-nzOPpnCVBZg4We802N2nlNKMxVUUjO19DseJWc4Gv3tIM9dQyt9dEwcfykD1I4Mda8ewTvcvz7DepztJyAomYb6sM1StJEnBk-C2BlN-j2~RiaZhdqYeTg3DxTm~FLlvcHMtJKr5~JpiwuawI7snjq-QaUHBZy2NlkeNRwJtisvpCIPuEcijBSJHjeHf2NPCiq2jOtFWcaHSdYZIQBhMXjY3I5TDtb~SJdR7VBPhVfryqZRc-P3MH25tCM2tcEcZy4q4P2GY6XuazJ5YN4MKeNGw2GVZP~hxE5dmBu8Z2yuf17shTeMjf6Oqj8ZaNvE~NLw__",
          audio: "https://audio.com",
          qrcode_image:
            "https://lh3.googleusercontent.com/pw/AP1GczMvUMeLt1IpaIYmtQHW2FnrmsCyU3Rs8prVMdP51jtbi5EDfuUYMO-1oQUTwng8r1uAo1K7PhpO2kH0eO7iaec97smBwCTFnI_6WOoMQ0CWLxvpDo-aMlzuplsSbkV1EDetVFB07n5TFLqIja390-E=w823-h824-s-no-gm?authuser=0",
          qrcode_link: "https://photos.app.goo.gl/uLeC7utPDTth1EBu9",
        },
        {
          code: "123456787",
          name: "Obra de arte 3",
          description: "Descrição obra 3",
          image:
            "https://s3-alpha-sig.figma.com/img/e260/f00d/a3b710f94222302563687003299b2221?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pbLpBpGkVJqRDCxB0bSSm0ffp50kMM18RwEKdtm8rurdTa5L40Sst1WcAPN0kM3DK~ftG--wGQtbUWshw5iwcWBiyNJXoxPl~e9dazqg4-u-vC-x4Y-DHjkhLVYOxoAiM5Y4ZjOG4ljLo9E~U~myOReFmVHgmM1E9Dqxa0B4Wnyuy05CampLCZnv0OXJVeMSSjYhc5bsOPP8Gr4hfmV294RurLr~xhaErAvZq2GNKBa5pY9xJXeQksnQ74JwGJyyIdjBfiGmMLecA2-boEic1u3U4wR0ymNWXQ18WJJtmJewZRAns~HlsxP41H6vIh41cVtLBujq5h9HGRom-wttPw__",
          audio: "https://audio.com",
          qrcode_image:
            "https://lh3.googleusercontent.com/pw/AP1GczMvUMeLt1IpaIYmtQHW2FnrmsCyU3Rs8prVMdP51jtbi5EDfuUYMO-1oQUTwng8r1uAo1K7PhpO2kH0eO7iaec97smBwCTFnI_6WOoMQ0CWLxvpDo-aMlzuplsSbkV1EDetVFB07n5TFLqIja390-E=w823-h824-s-no-gm?authuser=0",
          qrcode_link: "https://photos.app.goo.gl/uLeC7utPDTth1EBu9",
        },
        {
          code: "123456786",
          name: "Obra de arte 4",
          description: "Descrição obra 4",
          image:
            "https://s3-alpha-sig.figma.com/img/78d4/ea59/7dff3eb340ccbf651a3042e46ff46dd2?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PDC-4ek~FOIwafwjOm3G~g3e0OaqwEIgBRdycN~pdd6nKI7bJ5xhtFZiQ68zp3DDVQF8ay7HI-jebOZK6uOReMuxmS3PMw84x24prJNz0Ia8VhHUgtCPUWOypW1vWQaJKSmSel3Dnqi~hNrFIFs86bg10QzwMa62eT-5olBx4sPR9vSz4Pwj5Apy~QNzCiTkhIJL-iJzkCb0~n5vrb0m2VVPyrp7ALDlZLB0TzG6VaQTsKz4-JJe4IZOzMuhifG910uOgD-yhlMzTIgADSB~GA8ZNz4XkXlM6Jp6uoapK6kBzrfndS-BcnZ~rgFJ2Cjv76NrigQQ0U93LiAMS~66aQ__",
          audio: "https://audio.com",
          qrcode_image:
            "https://lh3.googleusercontent.com/pw/AP1GczMvUMeLt1IpaIYmtQHW2FnrmsCyU3Rs8prVMdP51jtbi5EDfuUYMO-1oQUTwng8r1uAo1K7PhpO2kH0eO7iaec97smBwCTFnI_6WOoMQ0CWLxvpDo-aMlzuplsSbkV1EDetVFB07n5TFLqIja390-E=w823-h824-s-no-gm?authuser=0",
          qrcode_link: "https://photos.app.goo.gl/uLeC7utPDTth1EBu9",
        },
        {
          code: "123456785",
          name: "Obra de arte 5",
          description: "Descrição obra 5",
          image:
            "https://s3-alpha-sig.figma.com/img/fb2d/0412/819905e583bbbbd8aa2743e6a93eff2a?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=js-r-2QWRj8CkLWbEriRU6c8bkOG7bn2enFPnU9WZ1HdJdTyR9fLD~FDF7m3TuUVx7BXLnY4ZI5hLSbl6GJ8dK-ZF8HnnSF~GjgAv6wFWdi7jWg838fl2b005XuSe4sayaL8eHm3rOFpOQw7xlhSv380u73c-vAlwQLF4UJTYIcNkb3p9Ps9Y7mwkjN8Ce2zyd8dC83FQeDwgWS07eQgWw80u2AIpctPKy2hw4l0kTAnYHc28CqIBe-L6laYCJnnjcVB9yIKOqweHlhh-DuF8BV7yl2xFNQX5X0BgEXecp-UX1nAAerJNSFO3kVHuGJXXuFI34ePCsiAUSFlCuJgPg__",
          audio: "https://audio.com",
          qrcode_image:
            "https://lh3.googleusercontent.com/pw/AP1GczMvUMeLt1IpaIYmtQHW2FnrmsCyU3Rs8prVMdP51jtbi5EDfuUYMO-1oQUTwng8r1uAo1K7PhpO2kH0eO7iaec97smBwCTFnI_6WOoMQ0CWLxvpDo-aMlzuplsSbkV1EDetVFB07n5TFLqIja390-E=w823-h824-s-no-gm?authuser=0",
          qrcode_link: "https://photos.app.goo.gl/uLeC7utPDTth1EBu9",
        },
        {
          code: "123456784",
          name: "Obra de arte 6",
          description: "Descrição obra 6",
          image:
            "https://s3-alpha-sig.figma.com/img/ae83/9817/3356196fd2ca6ac66fa6fa6fff5f7bc8?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IPYIvSJwKEi~SoqkUvyBfFpuRlEAWgVLerXxdb7mwjXepqo4FpQkvCJhvX5asMUwrBDU8oB4b4-G~pFGChrOywogBzX7frtkzbi4v3iJ15oVCB-qljmPVIcWWQdE2Z7ITewPUe41mHSfyuvB76AddNTk5sY5fhYO0guZIqOVBtj1AgF0ZSE1QM8Ze8FzyWPH9h1IlAzl~YKg2XC6dqt04vz8qxsbyLopwJmR1Lssd-iyQDDBk5SCLA-BB5KC5ep1RfOTKcQPo14SQ3ZW49vcw0qmMqTIetElrkhg~rsZ6bpsxiVkaRzMa-SOFyCVPv83BK5NF2-LpAoRFLyj8HB-Iw__",
          audio: "https://audio.com",
          qrcode_image:
            "https://lh3.googleusercontent.com/pw/AP1GczMvUMeLt1IpaIYmtQHW2FnrmsCyU3Rs8prVMdP51jtbi5EDfuUYMO-1oQUTwng8r1uAo1K7PhpO2kH0eO7iaec97smBwCTFnI_6WOoMQ0CWLxvpDo-aMlzuplsSbkV1EDetVFB07n5TFLqIja390-E=w823-h824-s-no-gm?authuser=0",
          qrcode_link: "https://photos.app.goo.gl/uLeC7utPDTth1EBu9",
        },
        {
          code: "123456783",
          name: "Obra de arte 7",
          description: "Descrição obra 1",
          image:
            "https://s3-alpha-sig.figma.com/img/c3a7/4742/4a4282314d1a04843c4973a28e606dc2?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IjNPvU6H-1thGw00NhImt1XAtMGCREkPJvmZqPNQLVifn7WBL5b4uM898EVcXFdVA~G1psGJ2JNWFsgZ7FlEMHnsGnX3vXAbq2JqKRmrA0Hbia6zMGaP2gJPN5w6HllsFy6~z4dvWhgw6toWXxXSV8N~ox-2AK-VK5cflPXEBpFgyy9WMuHIyWuPHwacMFKmecxOLm0ksouAOAMn0R-BOhbaSNwijlR8EU8czfJixbFWa6pnu9sDM8GqzJ7MRKOczKI0Gz~khcPAEDzIjdUtZqZZNalXuvTmHLU8esKFLXlhxPKBPi5OvNqzqxxBv6mQgRtusf2RUo2Lv4X3Mx2GSg__",
          audio: "https://audio.com",
          qrcode_image:
            "https://lh3.googleusercontent.com/pw/AP1GczMvUMeLt1IpaIYmtQHW2FnrmsCyU3Rs8prVMdP51jtbi5EDfuUYMO-1oQUTwng8r1uAo1K7PhpO2kH0eO7iaec97smBwCTFnI_6WOoMQ0CWLxvpDo-aMlzuplsSbkV1EDetVFB07n5TFLqIja390-E=w823-h824-s-no-gm?authuser=0",
          qrcode_link: "https://photos.app.goo.gl/uLeC7utPDTth1EBu9",
        },
        {
          code: "123456782",
          name: "Obra de arte 8",
          description: "Descrição obra 2",
          image:
            "https://s3-alpha-sig.figma.com/img/72be/24f4/5e00748b246e0ebc3807572de7b4a4aa?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qwQ6MSTN3zq-R-LIen-nzOPpnCVBZg4We802N2nlNKMxVUUjO19DseJWc4Gv3tIM9dQyt9dEwcfykD1I4Mda8ewTvcvz7DepztJyAomYb6sM1StJEnBk-C2BlN-j2~RiaZhdqYeTg3DxTm~FLlvcHMtJKr5~JpiwuawI7snjq-QaUHBZy2NlkeNRwJtisvpCIPuEcijBSJHjeHf2NPCiq2jOtFWcaHSdYZIQBhMXjY3I5TDtb~SJdR7VBPhVfryqZRc-P3MH25tCM2tcEcZy4q4P2GY6XuazJ5YN4MKeNGw2GVZP~hxE5dmBu8Z2yuf17shTeMjf6Oqj8ZaNvE~NLw__",
          audio: "https://audio.com",
          qrcode_image:
            "https://lh3.googleusercontent.com/pw/AP1GczMvUMeLt1IpaIYmtQHW2FnrmsCyU3Rs8prVMdP51jtbi5EDfuUYMO-1oQUTwng8r1uAo1K7PhpO2kH0eO7iaec97smBwCTFnI_6WOoMQ0CWLxvpDo-aMlzuplsSbkV1EDetVFB07n5TFLqIja390-E=w823-h824-s-no-gm?authuser=0",
          qrcode_link: "https://photos.app.goo.gl/uLeC7utPDTth1EBu9",
        },
        {
          code: "123456781",
          name: "Obra de arte 9",
          description: "Descrição obra 3",
          image:
            "https://s3-alpha-sig.figma.com/img/e260/f00d/a3b710f94222302563687003299b2221?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pbLpBpGkVJqRDCxB0bSSm0ffp50kMM18RwEKdtm8rurdTa5L40Sst1WcAPN0kM3DK~ftG--wGQtbUWshw5iwcWBiyNJXoxPl~e9dazqg4-u-vC-x4Y-DHjkhLVYOxoAiM5Y4ZjOG4ljLo9E~U~myOReFmVHgmM1E9Dqxa0B4Wnyuy05CampLCZnv0OXJVeMSSjYhc5bsOPP8Gr4hfmV294RurLr~xhaErAvZq2GNKBa5pY9xJXeQksnQ74JwGJyyIdjBfiGmMLecA2-boEic1u3U4wR0ymNWXQ18WJJtmJewZRAns~HlsxP41H6vIh41cVtLBujq5h9HGRom-wttPw__",
          audio: "https://audio.com",
          qrcode_image:
            "https://lh3.googleusercontent.com/pw/AP1GczMvUMeLt1IpaIYmtQHW2FnrmsCyU3Rs8prVMdP51jtbi5EDfuUYMO-1oQUTwng8r1uAo1K7PhpO2kH0eO7iaec97smBwCTFnI_6WOoMQ0CWLxvpDo-aMlzuplsSbkV1EDetVFB07n5TFLqIja390-E=w823-h824-s-no-gm?authuser=0",
          qrcode_link: "https://photos.app.goo.gl/uLeC7utPDTth1EBu9",
        },
        {
          code: "123456778",
          name: "Obra de arte 10",
          description: "Descrição obra 6",
          image:
            "https://st2.depositphotos.com/1354376/5341/i/450/depositphotos_53415901-stock-photo-ceramic-objects-from-herakleion-archaeological.jpg",
          audio: "https://audio.com",
          qrcode_image:
            "https://lh3.googleusercontent.com/pw/AP1GczMvUMeLt1IpaIYmtQHW2FnrmsCyU3Rs8prVMdP51jtbi5EDfuUYMO-1oQUTwng8r1uAo1K7PhpO2kH0eO7iaec97smBwCTFnI_6WOoMQ0CWLxvpDo-aMlzuplsSbkV1EDetVFB07n5TFLqIja390-E=w823-h824-s-no-gm?authuser=0",
          qrcode_link: "https://photos.app.goo.gl/uLeC7utPDTth1EBu9",
        },
      ],
      meta: {
        totalItems: 1,
      },
    },
  };

  return fetcherResponse;
}
