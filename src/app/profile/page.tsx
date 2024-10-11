import { Card, CardBody, Input, User } from "@nextui-org/react";

import { getTenant } from "@/db/queries";
import requireAuth from "@/utils/require-auth";

export default async function Profile() {
  const { session } = await requireAuth();
  const tenant = await getTenant(session.user?.id);

  return (
    <Card className="mx-auto mt-4 max-w-md">
      <CardBody>
        <User
          name={session.user?.name}
          description={session.user?.email}
          avatarProps={{
            showFallback: !session.user?.image,
            src: session.user?.image || "",
          }}
        />
      </CardBody>
      <Input className="p-4" value={tenant?.name} type="text" label="SubDomain" />
    </Card>
  );
}
