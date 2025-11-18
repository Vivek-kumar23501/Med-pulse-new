import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Input,
  Card,
  CardBody,
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { 
  Search, 
  Menu, 
  X, 
  Plus, 
  User, 
  Send,
  MessageCircle,
  Mic,
  Image,
  Paperclip
} from "react-feather";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeChat, setActiveChat] = useState("General Health");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");
    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        sender: "bot", 
        text: "Thanks for your message! This is a simulated response from MeduPulse." 
      }]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  const handleVoiceClick = () => {
    // Voice recording functionality would go here
    alert("Voice recording feature would be implemented here!");
  };

  const handleImageUpload = () => {
    // Image upload functionality would go here
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        alert(`Image selected: ${file.name}`);
        // Handle image upload logic here
      }
    };
    fileInput.click();
  };

  const chatHistory = ["General Health", "Symptoms Check", "Diet Plans", "General Health", "Symptoms Check", "Diet Plans", "General Health", "Symptoms Check", "Diet Plans", "General Health", "Symptoms Check", "Diet Plans", "General Health", "Symptoms Check", "Diet Plans", "Medicine Info"];

  return (
    <div style={{ 
      marginTop: "10vh", // 10% from top
      height: "90vh", // Remaining 90% height
      fontFamily: "'Poppins', sans-serif",
      background: "#e0f7fa",
      overflow: "hidden",
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    }}>
      {/* Mobile Navbar - ONLY on mobile */}
      <Navbar 
        color="primary" 
        dark 
        className="d-md-none" // ✅ Only show on mobile
        style={{ 
          background: "linear-gradient(135deg, #00acc1, #00796b)",
          position: "fixed",
          top: "10vh", // Adjusted to start after 10% margin
          left: 0,
          right: 0,
          zIndex: 1000
        }}
      >
        <Button
          color="link"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="me-2 text-white"
        >
          {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
        <NavbarBrand className="d-flex align-items-center">
          <MessageCircle className="me-2" size={20} />
          MeduPulse
        </NavbarBrand>
      </Navbar>

      <Container fluid style={{ 
        height: "90vh", // 90% height
        marginTop: "0px"
      }}>
        <Row style={{ height: "100%" }}>
          {/* Sidebar - Hidden on mobile by default */}
          <Col 
            md={3} 
            className={`h-100 ${isSidebarOpen ? 'd-block' : 'd-none d-md-block'}`}
            style={{ 
              background: "linear-gradient(135deg, #00acc1, #00796b)",
            }}
          >
            <Card 
              style={{ 
                height: "100%", 
                background: "transparent", 
                border: "none",
                borderRadius: 0
              }}
            >
              <CardBody className="d-flex flex-column h-100 text-white">
                {/* Top Section */}
                <div className="flex-grow-1">
                  <Button
                    color="light"
                    block
                    className="mb-3 fw-bold text-primary d-flex align-items-center justify-content-center"
                    style={{
                      borderRadius: "10px",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                    }}
                  >
                    <Plus size={16} className="me-2" />
                    New Chat
                  </Button>

                  <div className="position-relative mb-3">
                    <Search 
                      size={16} 
                      className="position-absolute"
                      style={{ left: "12px", top: "50%", transform: "translateY(-50%)" }}
                    />
                    <Input
                      type="text"
                      placeholder="Search chat..."
                      style={{
                        borderRadius: "10px",
                        border: "none",
                        paddingLeft: "35px",
                        background: "rgba(255,255,255,0.85)",
                        fontSize: "13px",
                      }}
                    />
                  </div>

                  <h6 className="mt-4 mb-2 fw-bold" style={{ color: "#e0f7fa" }}>
                    Chat History
                  </h6>

                  {/* Chat History */}
                  <div style={{ 
                    maxHeight: "350px", 
                    overflowY: "auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px"
                  }}>
                    {chatHistory.map((item, idx) => (
                      <div
                        key={idx}
                        onClick={() => {
                          setActiveChat(item);
                          setIsSidebarOpen(false);
                        }}
                        style={{
                          padding: "10px",
                          borderRadius: "10px",
                          background: activeChat === item 
                            ? "rgba(255,255,255,0.4)" 
                            : "rgba(255,255,255,0.25)",
                          cursor: "pointer",
                          fontWeight: 500,
                          color: "#ffffff",
                          transition: "0.3s",
                          fontSize: "13px",
                          border: activeChat === item ? "1px solid rgba(255,255,255,0.5)" : "none"
                        }}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Profile Section */}
                <div className="border-top border-light pt-3">
                  <div className="d-flex align-items-center">
                    <img
                      src="https://via.placeholder.com/45"
                      alt="Profile"
                      style={{
                        width: "45px",
                        height: "45px",
                        borderRadius: "50%",
                        border: "2px solid white",
                      }}
                    />
                    <div className="ms-3">
                      <strong style={{ fontSize: "13px" }}>User Name</strong>
                      <p 
                        className="mb-0" 
                        style={{ 
                          color: "#e0f7fa", 
                          fontSize: "11px",
                          cursor: "pointer"
                        }}
                      >
                        View Profile
                      </p>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>

          {/* Main Chat Area */}
          <Col 
            md={9} 
            className="h-100 d-flex flex-column"
            style={{ 
              background: "#e0f7fa",
              padding: 0
            }}
          >
            {/* Chat Header for Mobile */}
            <div 
              className="d-md-none p-3 text-center text-white"
              style={{
                background: "linear-gradient(135deg, #00acc1, #00796b)",
              }}
            >
              <h6 className="mb-0">{activeChat}</h6>
            </div>

            {/* Messages Area */}
            <div
              style={{
                flex: 1,
                padding: "20px",
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {messages.length === 0 ? (
                <div className="text-center text-muted mt-5">
                  <MessageCircle size={48} className="mb-3" />
                  <h5>Welcome to MeduPulse!</h5>
                  <p>Start a conversation by sending a message.</p>
                </div>
              ) : (
                messages.map((msg, index) => (
                  <div
                    key={index}
                    style={{
                      background: msg.sender === "user" ? "#00acc1" : "#ffffff",
                      color: msg.sender === "user" ? "white" : "#00796b",
                      padding: "12px 16px",
                      borderRadius: "12px",
                      marginBottom: "12px",
                      maxWidth: "80%",
                      alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
                      boxShadow: "0px 3px 12px rgba(0,0,0,0.1)",
                      fontSize: "14px",
                    }}
                  >
                    {msg.text}
                  </div>
                ))
              )}
            </div>

            {/* Input Area */}
            <div
              style={{
                padding: "15px",
                background: "#ffffff",
                borderTop: "3px solid #00acc1",
              }}
            >
              <div className="d-flex align-items-center">
                {/* Voice and Image Icons */}
                <div className="d-flex align-items-center me-2">
                  <Button
                    onClick={handleVoiceClick}
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "#00acc1",
                      padding: "8px",
                      borderRadius: "50%",
                      marginRight: "5px",
                      cursor: "pointer",
                    }}
                    className="d-flex align-items-center justify-content-center"
                  >
                    <Mic size={20} />
                  </Button>
                  <Button
                    onClick={handleImageUpload}
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "#00acc1",
                      padding: "8px",
                      borderRadius: "50%",
                      marginRight: "10px",
                      cursor: "pointer",
                    }}
                    className="d-flex align-items-center justify-content-center"
                  >
                    <Image size={20} />
                  </Button>
                </div>

                {/* Input Field */}
                <Input
                  type="text"
                  placeholder="Ask MeduPulse anything..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  style={{
                    padding: "12px",
                    borderRadius: "10px",
                    border: "1px solid #00acc1",
                    outline: "none",
                    background: "#e0f7fa",
                    color: "#00796b",
                    fontSize: "14px",
                    flex: 1,
                  }}
                />
                
                {/* Send Button */}
                <Button
                  onClick={sendMessage}
                  style={{
                    marginLeft: "10px",
                    padding: "12px 20px",
                    background: "linear-gradient(135deg, #00acc1, #00796b)",
                    color: "white",
                    border: "none",
                    borderRadius: "10px",
                    fontWeight: "700",
                    cursor: "pointer",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                    fontSize: "14px",
                  }}
                  className="d-flex align-items-center"
                >
                  <Send size={16} className="me-1" />
                  Send
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Overlay for mobile sidebar - ONLY on mobile */}
      {isSidebarOpen && (
        <div 
          className="d-md-none"
          style={{
            position: "fixed",
            top: "calc(10vh + 56px)", // Adjusted for 10% margin + navbar height
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.5)",
            zIndex: 999,
          }}
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default Chatbot;