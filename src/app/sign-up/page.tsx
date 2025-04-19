import SignUpForm from "@/app/sign-up/SignUpForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const SignInPage = () => {
  return (
    <main className="container mx-auto center">
      <Card className="w-full max-w-md">
        <CardHeader className="-mb-2 text-center">
          <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
          <CardDescription>Sign in to your account to continue</CardDescription>
        </CardHeader>
        <CardContent>
          <SignUpForm />
        </CardContent>
      </Card>
    </main>
  );
};

export default SignInPage;
