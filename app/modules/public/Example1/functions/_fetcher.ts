// import { api, filterControl, getScopedParams } from "arkyn_utils";
// import { generateURL } from "~/server/utils";
// import { schemas } from "../_schemas";

type FetcherProps = {
  request: Request;
  item_id: string | undefined;
};

export async function fetcher(props: FetcherProps) {
  // const { request, token, event_id, account_id } = props;
  // const { sign_up } = schemas;

  // const filterParams = getScopedParams(request);
  // const filters = filterControl(
  //   ["search", "strDate", "endDate", "limit", "page"],
  //   filterParams,
  // );

  // const collaboratorsURL = await generateURL(
  //   `${account_id}/users/event/${event_id}${filters}`,
  //   request,
  // );

  // const fetcherResponse = await api.FETCHER({
  //   collaborators: [
  //     sign_up,
  //     collaboratorsURL,
  //     { token, cached: collaboratorsURL + token },
  //   ],
  // });

  const fetcherResponse = {
    item: {
      name: "São Miguel Arcanjo: A Magnífica Escultura",
      // name: "São Miguel Arcanjo: A Magnífica Escultura",
      // audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
      audioUrl:
        "https://cdn.discordapp.com/attachments/874987121587388471/1227245103723319376/SPOILER_sao-miguel.mp3?ex=6627b411&is=66153f11&hm=a9a5df0a9e3d568db5f574f7fa2a03aca6763c03c11d060534a7d9a131039a6a&",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscinga.
      
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.`,
      image:
        "https://www.bolsadearte.com/oparalelo/wp-content/uploads/2022/08/Miguel-Arcanjo-Arte-Sacra.jpg",
    },
  };

  return { fetcherResponse };
}
