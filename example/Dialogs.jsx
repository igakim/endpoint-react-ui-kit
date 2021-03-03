import React, { useState } from 'react';
import {
  Container, Button, Dialog, AlertDialog, Text,
} from '../src';

const Dialogs = () => {
  const [open, setOpen] = useState(false);
  const [openWarning, setWarnignOpen] = useState(false);

  return (
    <Container>
      <Container.Row>
        <Container.Item>
          <Button
            onClick={() => setOpen(true)}
          >Dialog open</Button>
          <Dialog
            title="TEST"
            open={open}
            onClose={() => setOpen(false)}
            renderBody={() => (
              <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto asperiores expedita fugiat odio rerum voluptatem! Cumque dolores eius facere fuga ipsum minima quibusdam, quod similique vitae? Ab aliquam animi debitis distinctio est expedita id itaque repellendus? Ad blanditiis eos ex itaque placeat quae quibusdam reprehenderit vitae voluptas. Assumenda eos fuga iste porro tenetur? Ab doloremque id maiores nihil possimus quam rem sint unde voluptatibus? Aperiam asperiores aut commodi corporis culpa eius exercitationem fugit illum inventore labore laboriosam maxime minima minus molestias nemo nulla officia placeat praesentium repellat rerum, ullam veniam vero voluptatibus? Enim eveniet, iste libero modi possimus totam. Aspernatur at culpa error iusto magni optio provident repudiandae voluptatem? Adipisci amet aperiam aut dignissimos distinctio eligendi enim, ipsum, iusto, molestiae mollitia natus quod? Ab, dignissimos ducimus error excepturi facere hic magni maxime nisi nostrum placeat repellat tempora. Accusantium aliquam beatae corporis cum, dolor earum eius ex expedita iure libero minima natus nemo provident, quam qui quod repellendus tenetur! Aspernatur facere in natus, nostrum possimus vitae voluptatem! Adipisci, animi dolores doloribus exercitationem ipsam iste iure laudantium magnam magni nulla pariatur possimus provident quibusdam quis reiciendis repellat saepe sunt unde. Architecto iste itaque, modi qui rem repellat sunt. Animi fuga molestiae, neque quam quas reiciendis rerum! Dignissimos itaque maxime nobis placeat quisquam. Consequatur culpa distinctio dolorem dolorum eos, harum labore molestias necessitatibus nemo neque odit perspiciatis recusandae tempore, tenetur unde voluptatem voluptatibus. Ad fugiat officiis quae quod sapiente sed temporibus? A, accusamus accusantium alias amet aperiam assumenda at aut beatae commodi cumque dolorem ea eius eligendi excepturi exercitationem fuga illum ipsum molestiae molestias neque nesciunt nisi nulla numquam obcaecati officia officiis perspiciatis porro possimus praesentium quos repellat repudiandae saepe sit tempora tempore voluptatem voluptatum! Id, libero, mollitia! A ab adipisci alias corporis dolore dolorem doloremque ea, eius enim fugit hic iure iusto labore magnam modi molestiae mollitia non odit pariatur quaerat quis rem repellendus saepe similique tempore velit voluptas voluptatem! Accusantium asperiores atque cumque deserunt dicta eius eos et exercitationem fugit in itaque iure iusto molestiae, natus, nisi optio provident quam qui quibusdam quo recusandae reiciendis repellat sint tempore, totam velit veritatis! A, ad alias amet, cum deserunt dignissimos dolorum ea eius, est ex ipsa magnam necessitatibus nulla possimus quo vitae voluptates! Dignissimos eius est molestiae nesciunt nisi nostrum nulla quia sequi tempore voluptates. Accusamus aperiam atque, deleniti doloremque dolores ea eius est exercitationem expedita fugiat harum laboriosam numquam odio optio placeat quaerat, quia quos repellat sapiente sit tempore ullam voluptatibus. A debitis dolorem dolores et exercitationem expedita ipsum nihil non nulla qui quia quibusdam quidem, reiciendis. A, accusamus aspernatur consequuntur corporis debitis delectus dignissimos dolorem dolores, doloribus earum excepturi exercitationem expedita facilis id impedit ipsa iste iusto labore libero mollitia natus, neque quaerat recusandae rem repellat repellendus reprehenderit sed sequi soluta sunt tenetur totam veniam veritatis. Aperiam earum fuga fugit laudantium nulla placeat quasi sint. Aspernatur autem consequatur culpa cupiditate deserunt distinctio dolore doloremque doloribus ea earum eius et illo illum, ipsa itaque libero magnam mollitia nisi non officiis porro praesentium quod tenetur ullam, vero voluptas voluptatibus. Adipisci doloremque ex excepturi ipsam iste itaque nam necessitatibus quas quis repellat. Nemo, quo, repudiandae. Ad commodi ea ipsa iste maxime placeat quaerat quod sed, totam vitae! Accusamus, ad aliquam atque corporis cupiditate dolore dolorem in ipsa ipsam iure minus modi nemo neque nisi possimus provident quo rem repellendus, sit tempore? Adipisci atque corporis, deleniti esse eum nulla perspiciatis quam repudiandae velit voluptas. Asperiores blanditiis culpa inventore nemo porro quas tempora vel veniam. Aliquam architecto cum cupiditate delectus doloremque esse expedita, facilis iste maiores nobis nulla obcaecati possimus, quae quo saepe similique vitae? Atque autem commodi debitis dicta, dolore dolorem doloribus dolorum eaque eligendi eum maxime nisi provident quasi quo quos rem reprehenderit, totam voluptate. Amet animi, beatae commodi deserunt doloremque doloribus ea esse illo impedit inventore labore modi nesciunt nihil nobis possimus saepe sed similique sint! Ab dolorum esse eum hic iure unde? Consequatur debitis fuga id minima odit quibusdam recusandae. Ab cupiditate delectus dolor dolorem, doloremque doloribus dolorum eaque eligendi error eveniet ex explicabo facere fuga fugiat illum ipsum iste maxime nam natus nesciunt nostrum nulla, perferendis provident quae repellat sit sunt tempore vel velit veniam. Ad aspernatur aut autem beatae blanditiis debitis dicta distinctio dolore doloribus eligendi error est facilis harum hic illo inventore iure iusto, mollitia natus obcaecati odit omnis quaerat quibusdam quis sint tempora ullam. Asperiores eligendi excepturi explicabo perferendis sit tempore? Architecto aut beatae doloremque eveniet illum maxime modi neque nobis numquam obcaecati perspiciatis quam rerum ut veniam, veritatis vero voluptates. Ad aperiam architecto atque blanditiis consequatur delectus dignissimos distinctio eaque, eligendi eveniet excepturi exercitationem facere fuga fugit illum ipsum iste iusto labore molestiae molestias nisi numquam obcaecati omnis optio quae quaerat quia quidem quisquam recusandae rem repellendus rerum saepe sed similique unde vel voluptates! Ab aliquam atque ea eligendi eveniet, excepturi illo illum itaque labore modi nesciunt nobis officiis quaerat quo repellat sapiente sed sit temporibus ut voluptatum. Ab accusantium alias aliquam, animi atque culpa doloribus et harum itaque maxime, molestiae natus non nostrum officia perferendis saepe similique suscipit. Accusamus amet asperiores corporis, cumque dicta dolor doloremque ea eius eveniet excepturi expedita hic id in ipsa minus nihil odit porro possimus, quo reprehenderit rerum temporibus unde vel vero voluptas voluptates voluptatibus voluptatum! Ab alias aliquid animi cupiditate dolorum, explicabo in quisquam ratione. Aliquam asperiores consequatur iure nulla perferendis sequi vitae. A autem corporis dolore eum ex! Accusantium assumenda, consequuntur doloremque eius eum ex id iste molestiae velit. Adipisci aperiam corporis distinctio dolorem, doloremque eaque itaque neque nulla perspiciatis recusandae reiciendis sunt temporibus voluptates! Deleniti dolorum in libero officiis placeat quaerat repudiandae similique velit! Consectetur, numquam quidem! Amet autem beatae consectetur dolores eveniet labore, nostrum officiis quas quis quisquam ullam vel veniam voluptate. Ab aut consectetur cumque delectus dignissimos ducimus eaque earum esse fuga fugit hic, incidunt laudantium maxime modi non nostrum praesentium quis sapiente similique, sunt vero vitae voluptatem voluptatum. A ad amet asperiores eveniet hic ipsam itaque nisi non officiis placeat, porro quam, quisquam similique tempora unde! Accusantium animi aspernatur nemo! Accusamus distinctio doloribus ea labore magnam maiores nulla numquam reprehenderit. Consequatur deserunt ducimus, eum laboriosam laborum laudantium necessitatibus perspiciatis qui ullam ut veritatis voluptatibus. Assumenda eos iure maxime odit porro sapiente temporibus velit veritatis vero voluptatum! Ab aperiam atque consectetur consequuntur corporis dolor eius esse facere fugiat illo impedit iste iusto libero maxime molestiae mollitia, necessitatibus nihil nisi numquam obcaecati, odio officia perferendis quas quasi quidem quis quisquam quo quos reprehenderit saepe temporibus, ullam vel velit? A ab aliquam animi aperiam architecto at consectetur, culpa doloribus eaque est excepturi exercitationem expedita facere fugit illo illum impedit labore mollitia neque nobis nulla obcaecati odit provident quam quidem, quod quos recusandae reprehenderit soluta vel velit veritatis, voluptates voluptatibus! Aliquid aperiam aspernatur corporis cupiditate debitis dignissimos dolor dolorem ducimus eum explicabo iste laboriosam laborum mollitia natus, neque nihil odit porro possimus quidem quisquam sequi soluta temporibus? A accusamus adipisci alias autem consequatur, cupiditate, delectus deleniti dignissimos, dolores earum facere fuga illum in ipsa minima minus natus nemo nostrum optio perferendis quidem recusandae sed sint sit ullam. Amet consequatur eius nemo porro quasi quia recusandae sunt voluptatibus. Consequuntur deserunt earum hic id, magnam officiis sunt tenetur. Adipisci doloremque ducimus iste iusto laborum molestias reprehenderit. Adipisci autem deserunt doloribus ducimus eos, ex illo ipsa laboriosam libero molestias officiis recusandae? Aperiam atque delectus dicta dignissimos eos est explicabo, fuga maiores modi nam nulla officiis praesentium quod repellendus repudiandae sapiente sed voluptas voluptate. Aliquam animi at beatae deserunt dolor doloribus, ex excepturi facere inventore ipsam maxime natus nemo nostrum, perferendis quam quibusdam quis repellendus reprehenderit sed sint velit veniam voluptas voluptates. Cumque dolores enim eos esse id nisi non officia, reprehenderit! Adipisci alias animi assumenda, cumque cupiditate deleniti, deserunt dolorem nam obcaecati ratione rem, saepe? Animi earum ipsum quod rerum sed. Aliquid autem in iure modi, molestias nam quisquam recusandae voluptatum. A animi beatae cum debitis delectus deserunt dolorem, dolores illo ipsam, labore minus nemo numquam pariatur placeat ratione rem sequi sint sunt suscipit vitae! Alias aliquam, aspernatur at commodi debitis dolore dolores error est eveniet, explicabo in inventore iste itaque laborum nam nesciunt nobis nostrum numquam quaerat quia quod repellat sint suscipit temporibus totam. Aut beatae debitis deleniti dicta dignissimos, doloremque doloribus earum fuga praesentium qui sapiente suscipit velit veniam voluptatibus voluptatum! Accusantium, adipisci alias assumenda, beatae dicta enim in incidunt laboriosam, libero maiores nisi odio odit officiis quis quod repellendus sed. Adipisci aliquam animi maxime nobis perspiciatis qui tempora? Animi aspernatur atque culpa debitis ea eius eum expedita fugit libero, nihil nobis numquam perferendis quae sed sint tempore vel vero voluptate. Adipisci architecto, dicta doloribus enim ex fuga hic impedit ipsum labore necessitatibus, nihil odio officiis praesentium quia sint unde velit voluptatem voluptatibus! Incidunt, itaque, praesentium! At dolorem expedita fuga illo ipsam modi necessitatibus sint tempora, voluptates. Alias animi architecto culpa dolor dolore eaque error est explicabo, ipsum magnam modi molestias nam natus pariatur quam quasi quis reprehenderit sapiente totam vitae? Accusamus architecto doloribus eos, necessitatibus repellendus sapiente veritatis?</div>
            )}
            renderFooter={() => (
              <div>aaaaa</div>
            )}
          />
        </Container.Item>
        <Container.Item>
          <Button
            onClick={() => setWarnignOpen(true)}
          >Dialog open</Button>
          <AlertDialog
            title="Внимание! После этого действия нельзя будет вернуться назад!"
            open={openWarning}
            onClose={() => setWarnignOpen(false)}
            renderBody={() => (
              <Text variant="body2" color="secondary">Сохраняя протокол Вы подтверждаете что он заполнен верно. В случае несоответствия данных, ответственность лежит на должностном лице составившем протокол.</Text>
            )}
            renderFooter={() => (
              <div>
                <Button
                  variant="contrasted"
                  color="plain"
                  size="large"
                  style={{ marginRight: 30 }}
                  onClick={() => setWarnignOpen(false)}
                >
                  Отменить
                </Button>
                <Button
                  variant="filled"
                  color="primary"
                  size="large"
                  onClick={() => setWarnignOpen(false)}
                >
                  Подтвердить
                </Button>
              </div>
            )}
            type="warning"
          />
        </Container.Item>
      </Container.Row>
    </Container>
  );
};

export default Dialogs;
