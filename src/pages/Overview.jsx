import React from "react";
import {
  Button,
  ProgressBar,
  Dropdown,
  Tab,
  Nav,
  Row,
  Col,
} from "react-bootstrap";
import Chart from "react-apexcharts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUniversity } from "@fortawesome/free-solid-svg-icons"; // أيقونة البنك
import "./Overview.css";
import NavbarPage from "../components/NavbarPage";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
} from "@mui/material";
import { Add, Remove, Equalizer } from "@mui/icons-material";

const Overview = () => {
  const chartOptions = {
    chart: {
      id: "cashflow-chart",
      toolbar: {
        show: false, // إخفاء شريط الأدوات
      },
    },
    xaxis: {
      categories: [
        "Nov",
        "Dec",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
    },
  };

  const chartSeries = [
    {
      name: "Incoming",
      data: [0.5, 0.6, 0.4, 0.7, 0.8, 0.9, 0.6, 0.7, 0.5, 0.3, 0.4, 0.2],
    },
    {
      name: "Outgoing",
      data: [0.3, 0.4, 0.35, 0.5, 0.6, 0.4, 0.3, 0.35, 0.5, 0.6, 0.4, 0.25],
    },
  ];

  return (
    <div className="overview-container">
      <NavbarPage title="Overview" showButton={true} />
      <div className="overview-header">
        <h2>Let's get you off to a Flying Start!</h2>
        <p>
          Tailored next steps to help you nail the admin, take care of tax and
          see the bigger picture
        </p>
        <p>1 of 6 steps completed</p>
        <ProgressBar now={20} label=" " className="progress-bar-custom" />
        <br />
        <Button variant="light">Your Next Steps</Button>
      </div>

      {/* قسم Cashflow */}
      <div className="chart-section">
        <div className="cashflow-header">
          <h4>Cashflow</h4>
          <Dropdown>
            <Dropdown.Toggle variant="light" className="time-period-button">
              Last 12 months
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Last 3 months</Dropdown.Item>
              <Dropdown.Item href="#">Last 6 months</Dropdown.Item>
              <Dropdown.Item href="#">Last 12 months</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="cashflow-content">
          <div className="cashflow-chart">
            <Chart
              options={chartOptions}
              series={chartSeries}
              type="line"
              height={300}
            />
          </div>

          <div className="cashflow-details">
            <h5>Details</h5>
            <p>
              <strong>Incoming:</strong> £0
            </p>
            <p>
              <strong>Outgoing:</strong> £0
            </p>
            <p>
              <strong>Balance:</strong> £0
            </p>
          </div>
        </div>
      </div>

      {/* إضافة قسم الفواتير والبنك */}
      <Row className="mt-4">
        {/* قسم الفواتير */}
        <Col md={6}>
          <Tab.Container defaultActiveKey="invoices">
            <Nav variant="tabs" className="mb-3">
              <Nav.Item>
                <Nav.Link eventKey="invoices">Invoices</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="estimates">Estimates</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="projects">Projects</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="timeslips">Timeslips</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="invoices">
                <div className="invoices-content">
                  <p>Oh, you don’t have any Invoices yet!</p>
                  <Button variant="success" size="lg">
                    Create my first invoice
                  </Button>
                  <div
                    className="mt-3"
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Button variant="outline-primary">New invoice</Button>
                    <div className="mt-2">
                      <a href="#" className="text-muted">
                        View all invoices
                      </a>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Col>

        {/* قسم البنك */}
        <Col md={6}>
          <div className="banking-section">
            <div
              className="d-flex align-items-center"
              style={{ justifyContent: "space-between" }}
            >
              <h5 className="mb-0">Banking</h5>

              <Dropdown className="mb-3">
                <Dropdown.Toggle variant="light">All accounts</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">Account 1</Dropdown.Item>
                  <Dropdown.Item href="#">Account 2</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div style={{ display: "flex" }}>
              <FontAwesomeIcon icon={faUniversity} className="mr-2" />
              <p className="mb-0">All accounts</p>
            </div>
            <Chart
              options={{
                chart: {
                  id: "banking-chart",
                  toolbar: { show: false }, // إخفاء أدوات التفاعل
                },
                xaxis: {
                  categories: [
                    "Feb 2024",
                    "Apr 2024",
                    "Jun 2024",
                    "Aug 2024",
                    "Oct 2024",
                  ],
                },
              }}
              series={[{ name: "Balance", data: [0, 0, 0, 0, 0] }]}
              type="line"
              height={200}
            />
            <div
              className="mt-3"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Button variant="outline-primary">Upload statement</Button>
              <Button variant="outline-secondary" className="ml-2">
                View all bank accounts
              </Button>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="mt-4" style={{ display: "flex" }}>
        <Col md={6} style={{ background: "white" }}>
          <Tab.Container defaultActiveKey="expenses">
            <Nav variant="tabs" className="mb-3">
              <Nav.Item>
                <Nav.Link eventKey="expenses">Expenses</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="bills">Bills</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="expenses">
                <div className="expenses-content">
                  <p>You don't have any expenses yet!</p>
                  <Button variant="success" size="lg">
                    Create my first expense
                  </Button>
                  <div
                    className="mt-3"
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Button variant="outline-primary">New expense</Button>
                    <div className="mt-2">
                      <a href="#" className="text-muted">
                        View all expenses
                      </a>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="bills">{/* محتوى قسم Bills */}</Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Col>

        {/* قسم "Profit and Loss" */}
        <Col md={6} style={{ background: "white" }}>
          <Box
            sx={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Profit And Loss
            </Typography>

            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <b>Income</b>
                  </TableCell>
                  <TableCell>
                    <b>Expenses</b>
                  </TableCell>
                  <TableCell>
                    <b>Operating Profit</b>
                  </TableCell>
                  <TableCell>
                    <b>Less</b>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>£0</TableCell>
                  <TableCell>
                    <IconButton color="error">
                      <Remove />
                    </IconButton>
                    £0
                  </TableCell>
                  <TableCell>
                    <IconButton color="error">
                      <Equalizer />
                    </IconButton>
                    £0
                  </TableCell>
                  <TableCell>
                    <Box>
                      <Typography>Drawings: £0</Typography>
                      <Typography>Adjustments: £0</Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>

            {/* الجدول الثاني */}
            <Table sx={{ marginTop: "20px" }}>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <b>Retained Profit</b>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <IconButton color="success">
                      <Add />
                    </IconButton>
                    <b>This Period:</b> £0
                  </TableCell>
                  <TableCell>
                    <IconButton>
                      <Equalizer />
                    </IconButton>
                    <b>Brought Forward:</b> £0
                  </TableCell>
                  <TableCell>
                    <IconButton color="error">
                      <Remove />
                    </IconButton>
                    <b>Carried Forward / Distributable:</b> £0
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <Box sx={{ textAlign: "right", marginTop: "10px" }}>
              <Typography
                variant="body2"
                component="a"
                href="#"
                sx={{ color: "primary.main", textDecoration: "underline" }}
              >
                View full report
              </Typography>
            </Box>
          </Box>
        </Col>
      </Row>
    </div>
  );
};

export default Overview;
