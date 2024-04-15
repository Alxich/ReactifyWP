import errorsArray from "../bin/error.json";

export const errorTextHandler = (
  error: "PageNumberNav" | "NotSpecifiedButtonNav" | "NoErrorFound",
) => {
  const showErrorText = (error: string) =>
    errorsArray.find(({ type }) => type === error)?.text;

  console.error(
    showErrorText(error) ? showErrorText(error) : showErrorText("NoErrorFound"),
  );
};
