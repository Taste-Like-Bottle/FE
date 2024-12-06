import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // useLocation 추가
import { FiRefreshCw } from "react-icons/fi";
import { IoMdSkipBackward } from "react-icons/io";
import { LuDownload } from "react-icons/lu";
import './Result.css';
import axios from "axios";

const Result = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // main.js에서 navigate로 전달한 state를 받아옴
    const { generatedPromptText } = location.state || {};

    const gptAPI = `Bearer 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`;
    const [errorMessage, setErrorMessage] = useState("");
    const [generatedImage, setGeneratedImage] = useState("");
    const [state, setState] = useState("initial"); 

    const handleClick = () => {
        if (state === "initial") {
            setState("masked"); // 첫 번째 클릭 -> 원형 마스킹
        } else if (state === "masked") {
            setState("spinning"); // 두 번째 클릭 -> 회전 시작
            setTimeout(() => {
                setState("masked"); // 3초 후 회전 멈춤
            }, 3000);
        }
    };

    useEffect(() => {
        // 컴포넌트 마운트 후 이미지 생성 요청
        return () => {
            handleGenerateImage();
        };
        // console.log("test") // 기존 코드에서 test 로깅
    }, []);

    const handelRefresh = () => {
        setGeneratedImage('');
        handleGenerateImage();
    };

    const handleGenerateImage = async () => {
        try {
            console.log(generatedPromptText)
            // Prompt가 없는 경우 에러 처리
            if (!generatedPromptText) {
                setErrorMessage("No prompt text provided.");
                return;
            }

            const response = await axios.post(
                "https://api.openai.com/v1/images/generations",
                {
                    model: "dall-e-3",
                    prompt: generatedPromptText,
                    n: 1,
                    size: "1024x1024",
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: gptAPI           
                    },
                }
            );

            // Extract image URL from response
            const image = response.data.data[0].url;
            setGeneratedImage(image);
            setErrorMessage("");
            
        } catch (error) {
            if (error.response) {
                setErrorMessage(
                    `Error: ${error.response.status} - ${error.response.data.error.message}`
                );
            } else {
                setErrorMessage(`Error: ${error.message}`);
            }
        }
    };

    const handleDownload = useCallback(async () => {
        if (!generatedImage) return;
      
        try {
          const response = await axios.get(generatedImage, {
            responseType: 'blob'
          });
      
          // blob 데이터를 기반으로 URL 생성
          const url = window.URL.createObjectURL(response.data);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'image.png';
      
          document.body.appendChild(a);
          a.click();
      
          // cleanup
          a.remove();
          window.URL.revokeObjectURL(url);
      
        } catch (error) {
          console.error('Failed to download image:', error);
        }
      }, [generatedImage]);

    return (
        <div>
            <div className='top'>
                <button className='back' onClick={() => {navigate("/")}}>
                    <IoMdSkipBackward className = 'back_icon'/>
                    back
                </button>
                <button className='refresh' onClick={() => {handelRefresh()}}>
                    <FiRefreshCw style={{width: '5vh', height: '5vh'}}/>
                </button>
            </div>
            <div className='middle'>
                {!generatedImage && (
                    <h3>loading</h3>
                )}
                {generatedImage && (
                    <div style={{ marginTop: "30px" }}>
                        <div
                            className={`image-container spoke-guard ${
                                state === "spinning" ? "spinning" : ""
                            }`}
                            onClick={handleClick}
                            style={{
                                width: "512px",
                                height: "512px",
                                overflow: "hidden",
                                cursor: "pointer",
                            }}
                        >
                            <img
                                src={generatedImage}
                                alt="Generated"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    transition: "all 0.1s ease-in-out",
                                }}
                            />
                        </div>
                        {state === "initial" && (
                            <p style={{ marginTop: "10px", fontStyle: "italic" }}>
                            </p>
                        )}
                        {state === "masked" && (
                            <p style={{ marginTop: "10px", fontStyle: "italic" }}>
                            </p>
                        )}
                        {state === "spinning" && (
                            <p style={{ marginTop: "10px", fontStyle: "italic" }}>
                            </p>
                        )}
                    </div>
                )}
            </div>
            <div>
                {errorMessage}
            </div>
        </div>
    );
}

export default Result;
