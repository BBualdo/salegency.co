const CalendlyDesktop = () => {
  return (
    <>
      <div
        className="calendly-inline-widget xs:max-lg:hidden"
        data-url="https://calendly.com/salegency/30min"
        style={{ minWidth: "1080px", height: "700px" }}
      ></div>
      <script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      ></script>
    </>
  );
};
export default CalendlyDesktop;
