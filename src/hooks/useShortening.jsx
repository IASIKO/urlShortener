import { useState } from "react";

export const useShortening = () => {
  const [inputValue, setInputValue] = useState("");
  const [links, setLinks] = useState([]);
  const [shortenLinks, setShortenLinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copiedIndex, setCopiedIndex] = useState(null);

  const isValid = () => {
    if (!inputValue.includes("http://") && !inputValue.includes("https://")) {
      setError("Please add a protocol http:// or https:// to your URL");
      return true;
    }
    setError("");
    return false;
  };

  const fetchShortenUrl = async () => {
    if (!isValid()) {
      try {
        setLoading(true);
        const url = "https://spectacular-babka-fa1a16.netlify.app/shorten-url";
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ url: inputValue.trim() }),
        });

        const result = await response.json();

        setShortenLinks((prevShortenLinks) => [
          ...prevShortenLinks,
          result.shortUrl,
        ]);
        setError("");
      } catch (error) {
        setError(`An error has occured while shortening URL`);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleChange = (e) => setInputValue(e.target.value);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!inputValue.trim().length) {
      setError(`Please add a link`);
    } else {
      if (!isValid()) {
        setLinks((prevLinks) => [...prevLinks, inputValue]);
      }
      fetchShortenUrl();
    }
    setInputValue("");
  };

  const onCopyHandler = async (url, index) => {
    try {
      await navigator.clipboard.writeText(url);
      const text = await navigator.clipboard.readText();

      if (text === url) {
        setCopiedIndex(index);
      } else {
        alert("URL was not copied! Check the console");
      }
    } catch (error) {
      console.error("Error while copying the URL:", error);
    }
  };

  return {
    links,
    shortenLinks,
    inputValue,
    handleChange,
    onSubmitHandler,
    onCopyHandler,
    loading,
    error,
    copiedIndex,
  };
};
