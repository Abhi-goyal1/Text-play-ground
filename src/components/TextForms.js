import React, { useState } from "react";
import { toast } from "react-toastify";
export default function TextForms(props) {
  // eslint-disable-next-line
  const [text, setText] = useState("");
  const [theme, setTheme] = useState("light");
  const [weight, setStyle] = useState({
    fontWeight: "normal",
  });

  const [style, setStlye] = useState({
    fontStyle: "normal",
  });
  const [line, setLine] = useState({
    textDecorationLine: "none",
  });
  //text reverse

  const handleReverse = () => {
    if (text === "") {
      toast.dismiss();
      toast.warning("Enter text", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      let newtext = "";
      for (let index = text.length - 1; index >= 0; index--) {
        newtext += text[index];
      }
      setText(newtext);
      toast.dismiss();
      toast.success("Text has been Reversed", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  //onchange function
  const handleOnChnage = (event) => {
    setText(event.target.value);
  };
  //to change the theme of the textarea
  const toggleTheme = () => {
    if (theme === "light") {
      var input1 = document.getElementById("myBox");
      input1.style.backgroundColor = "black";
      input1.style.color = "white";

      setTheme("dark");
      toast.dismiss();
      toast.success("Theme has been updated to Dark", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      var input2 = document.getElementById("myBox");
      input2.style.backgroundColor = "white";
      input2.style.color = "black";
      setTheme("light");
      toast.dismiss();
      toast.success("Theme has been updated to Light", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  //to make the text bold
  const handleBold = () => {
    if (text === "") {
      toast.dismiss();
      toast.warning("Enter text", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      if (weight.fontWeight === "normal") {
        setStyle({ fontWeight: "bold" });
        toast.dismiss();
        toast.success("Text is converted to bold", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        setStyle({ fontWeight: "normal" });
        toast.dismiss();
        toast.success("Text is converted to normal", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  };
  //to make the text italic
  const handleItalic = () => {
    if (text === "") {
      toast.dismiss();
      toast.warning("Enter text", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      if (style.fontStyle === "normal") {
        setStlye({ fontStyle: "italic" });
        toast.dismiss();
        toast.success("Text is converted to italic", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        setStlye({ fontStyle: "normal" });
        toast.dismiss();
        toast.success("Text is converted to normal", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  };
  //to make text underlined
  const handleUnderline = () => {
    if (text === "") {
      toast.dismiss();
      toast.warning("Enter text", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      if (line.textDecorationLine === "none") {
        setLine({ textDecorationLine: "underline" });
        toast.dismiss();
        toast.success("Text is underlined", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        var input2 = document.getElementById("myBox");
        input2.style.textDecoration = "underline";
        setLine({ textDecorationLine: "none" });
        toast.dismiss();
        toast.success("Text is normal", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  };
  //to left align the text
  const leftAlign = () => {
    if (text === "") {
      toast.dismiss();
      toast.warning("Enter text", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      document.getElementById("myBox").style.textAlign = "left";
      toast.dismiss();
      toast.success("Text is left aligned", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  //to right align te text
  const rightAlign = () => {
    if (text === "") {
      toast.dismiss();
      toast.warning("Enter text", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      document.getElementById("myBox").style.textAlign = "right";
      toast.dismiss();
      toast.success("Text is right aligned", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  //to center the text
  const centerAlign = () => {
    if (text === "") {
      toast.dismiss();
      toast.warning("Enter text", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      document.getElementById("myBox").style.textAlign = "center";
      toast.dismiss();
      toast.success("Text is center aligned", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  //convert upper case
  const handleUpClick = () => {
    if (text === "") {
      toast.dismiss();
      toast.warning("Enter text", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      let newtext = text.toUpperCase();
      setText(newtext);
      toast.dismiss();
      toast.success("Converted to Uppercase", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  //convert lower case
  const handleLoClick = () => {
    if (text === "") {
      toast.dismiss();
      toast.warning("Enter text", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      let newtext = text.toLowerCase();
      setText(newtext);
      toast.dismiss();
      toast.success("Converted to Lowercase", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  //copy text to clipboard
  const handleCopy = () => {
    if (document.getElementById("myBox").value === "") {
      toast.dismiss();
      toast.error("There is no text to copy", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      var text = document.getElementById("myBox");
      navigator.clipboard.writeText(text.value);
      toast.dismiss();
      toast.success("Text is copied to clipboard", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  //clear textarea
  const handleClear = () => {
    if (text === "") {
      toast.dismiss();
      toast.error("No text present to clear", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      setText("");
      toast.dismiss();
      toast.success("Textarea is clear", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  //remove extra spaces
  const handleExtraSpace = () => {
    if (text === "") {
      toast.dismiss();
      toast.error("There is no extra spaces avaiable currently", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      let newtext = text.split(/[ ]+/);
      setText(newtext.join(" "));
      toast.dismiss();
      toast.success("Extra spaces has been removed", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  //general text
  const handletext = () => {
    if (text === "") {
      toast.dismiss();
      toast.warning("Enter text", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      let newtext = text
        .toLowerCase()
        .split(/[ ]+/)
        .map((text) => {
          return text.charAt(0).toUpperCase() + text.slice(1);
        });
      setText(newtext.join(" "));
      toast.dismiss();
      toast.success("General Text", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  //alternate conversion
  const onAlternatingCase = () => {
    if (text === "") {
      toast.dismiss();
      toast.warning("Enter text", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      let newtext = "";
      for (let index = 0; index < text.length; index++) {
        if (index % 2 === 0) {
          newtext += text[index].toLowerCase();
        } else {
          newtext += text[index].toUpperCase();
        }
      }
      setText(newtext);
      toast.dismiss();
      toast.success("Alternative conversion of text", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <>
      <div className="mb-3">
        <label for="myBox mt-3" className="form-label">
          <h1>
            {" "}
            <strong>TEXTUTILS</strong>
          </h1>
        </label>
        <textarea
          className="form-control mt-3"
          placeholder="Type Something"
          value={text}
          style={Object.assign(
            {},
            style,
            line,
            weight,
            { backgorundColor: props.mode === "dard" ? "white" : "dark" },
            { color: props.mode === "dard" ? "grey" : "light" }
          )}
          id="myBox"
          rows="12"
          onChange={handleOnChnage}
        >
          <p>{text.length > 0 ? `${text}` : ""}</p>
        </textarea>
        <div>
          <button
            className="btn btn-primary  mx-2 my-4"
            onClick={handleReverse}
          >
            Reverse
          </button>
          <button className="btn btn-primary  mx-2 my-4" onClick={toggleTheme}>
            Theme
          </button>
          <button className="btn btn-primary  mx-2 my-4" onClick={handleBold}>
            Bold
          </button>
          <button className="btn btn-primary  mx-2 my-4" onClick={handleItalic}>
            Italic
          </button>
          <button
            className="btn btn-primary  mx-2 my-4"
            onClick={handleUnderline}
          >
            Underline
          </button>
          <button className="btn btn-primary  mx-2 my-4" onClick={leftAlign}>
            Left Align
          </button>
          <button className="btn btn-primary  mx-2 my-4" onClick={rightAlign}>
            Right Align
          </button>
          <button className="btn btn-primary  mx-2 my-4" onClick={centerAlign}>
            Center Align
          </button>
        </div>
        <div>
          <button className="btn btn-primary mx-2 my-4" onClick={handleUpClick}>
            Convert to Upper Case
          </button>
          <button className="btn btn-primary mx-2 my-4" onClick={handleLoClick}>
            Convert to Lower Case
          </button>
          <button className="btn btn-primary mx-2 my-4" onClick={handleCopy}>
            Copy To ClipBoard
          </button>
          <button className="btn btn-primary  mx-2 my-4" onClick={handleClear}>
            Clear
          </button>
          <button
            className="btn btn-primary  mx-2 my-4"
            onClick={handleExtraSpace}
          >
            Remove Extra Spaces
          </button>
          <button className="btn btn-primary  mx-2 my-4" onClick={handletext}>
            Generalised Text
          </button>
          <button
            className="btn btn-primary  mx-2 my-4"
            onClick={onAlternatingCase}
          >
            Alternating Text
          </button>
        </div>
        <div className="container my-3">
          <h1>Your Text Summary</h1>
          <p>
            {
              text.split(/[ ]+/).filter((a1) => {
                return a1.length !== 0;
              }).length
            }{" "}
            words and {text.length} characters
          </p>
          <p>
            {0.008 * text.split("").length} minutes would be required to read
            the above entered text
          </p>
          <h2>Preview</h2>
          <p>
            {text.length > 0
              ? `${text}`
              : "Enter something in the textbox preview"}
          </p>
        </div>
      </div>
    </>
  );
}
