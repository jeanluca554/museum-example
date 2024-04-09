// import AudioPlayerComponent from "~/components/audio-player-component";

import { useLoaderData } from "@remix-run/react";
import type { LoaderProps } from "../../_types";
import { AudioButton } from "../AudioButton";

export function ViewContent() {
  const { fetcherResponse } = useLoaderData<LoaderProps>();
  const item = fetcherResponse.item;

  return (
    <div className="">
      <div
        className="flex h-80 bg-cover bg-center sm:h-[400px] md:h-[450px]"
        style={{ backgroundImage: `url(${item.image})` }}
      ></div>
      <div className="-mt-4 rounded-t-2xl bg-neutral-100 px-6 pt-8 dark:bg-neutral-900 md:rounded-3xl">
        <p className="mb-4 text-lg font-semibold text-neutral-900 dark:text-neutral-50 sm:mb-6 sm:text-2xl">
          {item.name}
        </p>

        {/* <div className="mb-4 rounded-lg border border-neutral-200 p-3 dark:border-neutral-700 sm:mb-6">
          <AudioPlayerComponent />
        </div> */}

        <hr className="w-1/4 border-t border-primary_gold-500" />
        <div className=" border-l border-primary_gold-500 py-3 pl-[10px]">
          <p className="text-sm font-normal text-neutral-600 dark:text-neutral-400 sm:text-base">
            {/* {item.description} */} A figura de São Miguel Arcanjo é
            apresentada em sua forma clássica, como um guerreiro celestial de
            imponência inigualável. A escultura captura sua figura robusta e
            imponente, vestida em uma armadura que simboliza sua posição como
            líder dos exércitos celestiais e protetor dos fiéis. Cada detalhe da
            armadura é meticulosamente esculpido, desde os relevos ornamentados
            até as correias que se ajustam perfeitamente ao corpo da figura,
            demonstrando a habilidade excepcional do escultor em trabalhar o
            material e criar texturas realistas.
            <br />
            <br />
            O rosto de São Miguel Arcanjo é esculpido com expressões que
            transmitem tanto serenidade como determinação. Seus olhos, profundos
            e penetrantes, parecem observar o horizonte distante enquanto sua
            boca sugere uma calma confiante. Esses elementos combinados retratam
            não apenas a força física do arcanjo, mas também sua sabedoria e
            liderança espiritual.
            <br />
            <br />
            Em uma das mãos, São Miguel Arcanjo segura firmemente uma espada, um
            símbolo clássico de sua luta contra as forças do mal e sua defesa
            dos justos. A espada é esculpida de maneira que parece refletir a
            luz, criando um efeito de brilho que enfatiza a natureza divina e
            protetora da figura. A outra mão do arcanjo está estendida para o
            alto, simbolizando sua conexão com o divino e sua disposição para
            interceder em favor daqueles que buscam sua ajuda.
            <br />
            <br />
            A escultura está assentada sobre uma base sólida, que por sua vez é
            adornada com motivos decorativos que remetem à iconografia religiosa
            e ao contexto celestial do arcanjo.
            <br />
            <br />
            São Miguel Arcanjo é uma figura de grande importância na tradição
            cristã, sendo considerado o líder dos exércitos celestiais e o
            protetor dos fiéis. Sua representação como um guerreiro celestial é
            uma metáfora poderosa para a luta entre o bem e o mal, a coragem e a
            proteção divina.
            <br />
            <br />
            Esta escultura não apenas encapsula a beleza artística, mas também
            convida os espectadores a refletirem sobre temas como fé, coragem e
            proteção espiritual. Ela é uma homenagem à devoção e à crença na
            intervenção divina na vida das pessoas.
            <br />
            <br />
            Ao contemplar esta escultura de São Miguel Arcanjo, os espectadores
            são convidados não apenas a apreciar sua beleza estética e técnica,
            mas também a refletir sobre os valores espirituais e a proteção
            divina que ela representa. É uma obra que continua a inspirar e a
            fascinar, transmitindo uma mensagem de fé, coragem e esperança para
            aqueles que a contemplam.
            <br />
            <br />
          </p>
        </div>
        <AudioButton urlAudio={item.audioUrl} />
      </div>
    </div>
  );
}
