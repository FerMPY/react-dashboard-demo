import { EditProfile } from "@/components/edit-profile";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const keys = {
  editProfile: "editProfile",
  preferences: "preferences",
  security: "security",
} as const;

const Content = [
  { title: "Edit Profile", key: keys.editProfile, Component: EditProfile },
  { title: "Preferences", key: keys.preferences, Component: () => <></> },
  { title: "Security", key: keys.security, Component: () => <></> },
] as const;

export function Settings() {
  return (
    <Card>
      <Tabs defaultValue={keys.editProfile}>
        <CardHeader>
          <TabsList className="grid w-full grid-cols-3">
            {Object.values(Content).map((tab) => (
              <TabsTrigger key={tab.key} value={tab.key}>
                {tab.title}
              </TabsTrigger>
            ))}
          </TabsList>
        </CardHeader>
        <CardContent>
          {Content.map((tab) => (
            <TabsContent value={tab.key} key={tab.key}>
              <tab.Component />
            </TabsContent>
          ))}
        </CardContent>
      </Tabs>
    </Card>
  );
}
