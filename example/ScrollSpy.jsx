import React from 'react';

import { Container, ScrollSpy, Text } from '../src';

const ScrollSpyContainer = () => {
  const anchors = [
    { key: 'content1', label: 'Content 1' },
    { key: 'content2', label: 'Content 2' },
    { key: 'content3', label: 'Content 3' },
    { key: 'content4', label: 'Content 4' },
  ];

  return (
    <div>
      <Container>
        <Container.Row>
          <Container.Item md={6}>
            {
              anchors.map((anc) => (
                <div id={anc.key} style={{ marginBottom: 40 }}>
                  <Text variant="h1">{anc.label}</Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto, autem delectus error facere nostrum reprehenderit repudiandae voluptates. A architecto autem blanditiis consequatur cum, distinctio doloremque dolores ducimus ea enim est et eum eveniet ex expedita illum ipsum itaque laboriosam laborum modi, necessitatibus nihil, nisi quia rem repudiandae saepe similique velit? Doloremque facilis in incidunt laborum modi voluptatem voluptatum? A alias commodi consequuntur doloremque, ea eius excepturi ipsa iure nisi officiis quasi quia similique vel, veniam voluptas? A aliquam architecto cum cumque delectus eos et illum incidunt iste magnam, minus molestias nesciunt officiis quasi quidem repudiandae saepe sunt tempore. Cupiditate deleniti deserunt ducimus ea eligendi fugit, nisi optio perspiciatis praesentium quibusdam quos recusandae suscipit voluptate. Animi assumenda blanditiis culpa cumque distinctio eligendi enim error est et eum excepturi expedita fuga fugit id incidunt iure libero modi nam necessitatibus nisi nostrum perferendis tenetur, ullam vero vitae. Atque beatae, error eum facilis iste magni nam numquam repellendus repudiandae saepe. A amet architecto asperiores at consectetur culpa cupiditate ducimus eius eum ex fuga illo itaque iusto laborum laudantium libero mollitia nam natus nisi odit officia perferendis placeat, porro quaerat, quam quibusdam rem repellat similique sint soluta. Accusamus adipisci animi culpa cum delectus distinctio eaque error hic illo laboriosam molestias praesentium quaerat quod, repellat sint voluptas voluptate. Aperiam blanditiis deserunt dignissimos eius odio, quam quos? Animi consectetur culpa est fuga illo ipsa, labore magni maiores maxime officia officiis perspiciatis placeat quam saepe temporibus vel vero? Consectetur ducimus labore molestiae nesciunt odit officiis placeat sequi vero, vitae! At, cupiditate dicta dolore eaque eos error fuga minima quae saepe sapiente tenetur voluptas voluptatibus. A accusamus architecto exercitationem hic natus odit pariatur quae ratione reprehenderit sequi, sit voluptatem? In laudantium modi molestiae nam repellat, saepe sunt voluptas! Ab aut, cum ex explicabo hic magni mollitia qui soluta ut voluptate? A aspernatur beatae cum deserunt eligendi error et expedita fuga illo laboriosam laudantium magnam nihil nobis nostrum numquam obcaecati odit, officia officiis, omnis, placeat porro quisquam rem repellat sed sit suscipit ullam unde ut veritatis voluptatibus? A commodi consequatur, deleniti dolorum explicabo itaque molestias nam natus, porro quae repellat repellendus! Ab, amet, blanditiis ex explicabo facere, ipsum iusto nobis nulla perspiciatis quam quas quos sint ullam vel veniam veritatis voluptatum! Aliquid animi assumenda atque autem beatae blanditiis commodi consequatur debitis eaque et ex expedita facere itaque minima modi, molestiae nam nihil obcaecati odit officia officiis optio praesentium quae quo quos repellendus repudiandae rerum sed temporibus ut vel vitae voluptas voluptatem? Alias aspernatur atque blanditiis consequatur corporis deserunt enim, illo ipsum obcaecati odit perspiciatis, praesentium quae quaerat similique suscipit unde vel! Accusantium adipisci aliquam amet, aperiam aspernatur autem beatae deleniti dolor dolore eligendi error explicabo fuga fugiat fugit hic id incidunt ipsa iusto laborum necessitatibus neque obcaecati odio quam recusandae suscipit tempore temporibus veritatis. Ab at aut culpa, dolor, eligendi eum exercitationem hic illo iste minima porro possimus sint veritatis? Adipisci alias architecto atque beatae deleniti dicta dolorum enim error, esse ex exercitationem expedita hic incidunt magnam numquam officiis optio porro possimus provident quas ratione reprehenderit saepe tempore totam vel velit veniam voluptatem. At consequuntur, minima obcaecati placeat sapiente tempora. Aut blanditiis deleniti dicta dolor eaque fugit impedit, iste maiores molestiae numquam officiis optio praesentium quae quas, quis soluta suscipit? Accusamus ad consectetur consequuntur eaque eligendi et magni natus officia, possimus quos! Animi aperiam architecto at cum, cupiditate debitis deserunt expedita fugit incidunt ipsam itaque iure quibusdam quisquam repellendus sequi ullam voluptatibus. Animi architecto blanditiis distinctio obcaecati. Adipisci aperiam blanditiis culpa praesentium repellat repudiandae voluptatem. Ad aspernatur, aut cumque cupiditate deleniti earum enim eum explicabo impedit iste laborum magnam nam nihil nisi numquam obcaecati officiis porro quae quas qui quidem sint, ullam velit vitae voluptas voluptate voluptates voluptatum. Asperiores cupiditate doloremque ea eveniet fugiat ipsa, iste laudantium praesentium quae quas qui quia quo repudiandae sit voluptatum. Aliquid, corporis debitis deleniti dolores exercitationem explicabo ipsa laudantium minus necessitatibus nisi numquam, obcaecati odit, perspiciatis placeat quasi quos reprehenderit. Beatae culpa dolore in pariatur sequi sit sunt vitae. Beatae consequatur ducimus eligendi est expedita fugit illo, itaque maxime natus nostrum quasi reprehenderit saepe sapiente sed, similique sint sit soluta tempora unde vitae. Consectetur consequuntur cupiditate doloremque dolorum eos facere illum maiores, nam quasi. Alias aliquid eligendi eveniet fugit itaque molestias quisquam velit vero? Accusantium adipisci aperiam consequuntur deserunt, impedit in ipsam iure magni molestias quaerat quam quasi, quidem quos repellat similique sint vel voluptatum! Expedita facilis, magnam maiores quasi velit voluptas voluptate. Est laborum molestias nemo officiis quas recusandae soluta voluptatibus? Architecto doloremque eos esse nihil officia placeat rem sequi velit. At corporis delectus, dolor doloremque enim exercitationem fugiat hic illo laudantium magni maiores maxime mollitia necessitatibus nesciunt nihil nostrum nulla odio officiis pariatur quasi quia quidem ratione reprehenderit rerum sapiente similique vel? Amet blanditiis, doloremque esse eveniet exercitationem fugiat, incidunt labore maiores nulla pariatur porro provident quas rem repellendus saepe sapiente temporibus veniam voluptate. Consequatur culpa dolore dolorum et id impedit in iusto natus pariatur quis, suscipit velit. Atque aut commodi eveniet facere, impedit laudantium, minus molestiae nemo nostrum odit optio praesentium quia repellendus sed sint temporibus voluptas! Accusantium architecto culpa deserunt dicta distinctio dolore ex modi molestiae nisi nostrum nulla quod repellendus, sint ullam voluptatum. Aut cumque dolor, eligendi et explicabo fuga pariatur quae quas sunt totam unde vitae voluptatum? Accusamus dignissimos excepturi expedita fugit ipsa magnam minus numquam quibusdam! Atque distinctio facere, in minus saepe unde! Accusamus aliquid, dicta exercitationem hic in inventore itaque magni minima minus modi officiis, perspiciatis quas quia quos ratione rerum soluta suscipit ullam veniam voluptatibus. Accusamus accusantium ad architecto cum earum in iste labore laudantium, maiores minus nemo nobis odit officiis omnis placeat praesentium provident rem, sequi sit suscipit totam ut veniam! Aperiam blanditiis cum eaque enim esse, ex illum incidunt, magnam maxime, nulla obcaecati placeat? Aliquam blanditiis eaque error eum eveniet maxime minus numquam officiis, optio, praesentium, quaerat unde vel! Aut dignissimos dolore enim id minus porro possimus quod. Accusamus asperiores deleniti dolores est non repellat reprehenderit. Accusamus corporis deleniti eveniet facilis in labore maxime placeat quia quo recusandae! Accusamus accusantium amet animi asperiores, blanditiis dicta dignissimos distinctio doloribus earum error ex exercitationem inventore ipsa ipsam minima nemo nobis odio optio quaerat quasi recusandae rem similique voluptatibus. Dignissimos dolor enim eos excepturi fuga in, necessitatibus perferendis quam. Accusamus alias culpa dignissimos, et eum facere fuga impedit incidunt itaque iusto laboriosam minus nam neque officia, pariatur quasi reiciendis reprehenderit saepe tempora, tempore tenetur ut veritatis vero voluptas voluptatibus. Amet doloribus facilis, minima necessitatibus nisi obcaecati omnis porro quas! A accusantium aliquid atque, corporis cupiditate deserunt dignissimos dolor doloribus ea eligendi eos iusto laudantium molestias nam neque obcaecati placeat, quia, quidem reprehenderit velit. A accusantium amet animi architecto aspernatur beatae blanditiis, cum cupiditate deserunt distinctio dolorum eos id ipsa ipsam ipsum iure, laudantium maiores minus modi molestiae nemo nihil, officiis perspiciatis porro quas quia quidem quo quod ratione repudiandae saepe soluta veniam voluptatem. Amet animi asperiores assumenda beatae, culpa dicta dignissimos dolore ducimus error est ex incidunt ipsam laboriosam magni maiores molestias necessitatibus obcaecati perferendis, quam quibusdam quisquam recusandae reiciendis repellat rerum sapiente tempore ullam voluptatem. Accusantium adipisci aliquam aspernatur, aut beatae consequatur consequuntur corporis cupiditate, debitis ducimus eligendi eos eveniet excepturi facere fugiat, id impedit iure labore mollitia natus nobis non nostrum officiis possimus qui reiciendis rem repellat repudiandae sapiente sed sequi tempora vel veniam. Architecto aspernatur atque eius, eligendi iste omnis porro quaerat qui quibusdam reprehenderit saepe sed velit voluptatum! Aspernatur assumenda cumque dolores eum, exercitationem nemo neque numquam obcaecati possimus praesentium rerum similique sint tempora veniam veritatis? Ab aliquam amet architecto asperiores aspernatur at autem cum debitis dolores dolorum ea exercitationem, facere fugiat ipsa iure nobis officiis pariatur quae quibusdam ratione, recusandae repudiandae rerum vitae voluptas voluptate! A, asperiores consequatur debitis dicta eligendi et eum eveniet fuga harum, illum inventore iste iusto necessitatibus officiis placeat quidem quod rerum sapiente ullam vero voluptatem voluptates voluptatum. Accusamus amet consequuntur corporis cum delectus deleniti dolore expedita fugit id iure iusto magnam minus neque non, porro quas qui quis ratione rem saepe sequi, soluta unde. A aperiam atque autem consectetur cupiditate, deserunt dolor dolores, eius eos est et harum impedit molestias nam necessitatibus neque nobis officiis ut veniam vitae. Maxime, quae, reprehenderit. Ad architecto at autem commodi debitis dicta dignissimos dolores dolorum eaque error est exercitationem explicabo facere id impedit in iure labore libero magnam, maiores nisi non numquam, omnis, placeat quaerat quisquam ratione repellat similique totam voluptate. Doloribus et ipsam provident. Doloribus explicabo obcaecati velit? Alias minus porro voluptas. A adipisci, commodi culpa cum doloremque earum eos est exercitationem facere, fuga fugit maxime modi odio, quas quis quod voluptas. A adipisci atque dicta libero, omnis ratione saepe vitae. Accusamus, adipisci alias consectetur dicta dolore eos error exercitationem illo in laboriosam non numquam, perferendis placeat possimus, provident qui quibusdam quisquam quo repellendus vero. Asperiores deleniti doloribus eum libero modi pariatur quidem, suscipit vitae! Aliquid asperiores aspernatur at aut excepturi fugit in molestias neque nesciunt, optio quas sit veritatis vitae. Animi dolores earum eius explicabo facere voluptatibus?
                </div>
              ))
            }
          </Container.Item>
          <Container.Item md={6}>
            <div style={{
              position: 'fixed',
              right: 100,
              bottom: 100,
            }}>
              <ScrollSpy anchors={anchors} />
            </div>
          </Container.Item>
        </Container.Row>
      </Container>
    </div>
  );
};

export default ScrollSpyContainer;
