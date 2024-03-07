import Image from "next/image";

export default function Home() {
  return (
    <>
      <header>
        <div className="menuButton">
          <Image src={`/menuBar.svg`} alt={`manuBar`} width="18" height="18" />
        </div>

        <div className="logo">
          <Image src={`/logo.svg`} alt={`logo`} width="136" height="24" />
        </div>

        <div className="dateTimeNotification">
          <div className="dateTime">
            <span className="date">Sunday, 20 August</span>
            <span className="time">1:50 PM</span>
          </div>

          <div className="notification">
            <Image
              src={`/notification.svg`}
              alt={`notification`}
              width="18"
              height="20"
            />
          </div>
        </div>
      </header>
      <div className="mainSection">
        <aside>
          <nav>
            <ul>
              <li>
                <a href="#">Overview</a>
              </li>
              <li>
                <a href="#">Profile</a>
              </li>
              <li>
                <a href="#">Appointments</a>
              </li>
              <li>
                <a href="#">History</a>
                <ul className="subMenu">
                  <li>
                    <a href="#">Videos</a>
                    <a href="#">Videos Library</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Messages</a>
              </li>
              <li>
                <a href="#">Support</a>
                <ul className="subMenu">
                  <li>
                    <a href="#">Videos</a>
                    <a href="#">Videos Library</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Aftercare</a>
                <ul className="subMenu">
                  <li>
                    <a href="#">Videos</a>
                    <a href="#">Videos Library</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Finances</a>
              </li>
              <li>
                <a href="#" className="active">
                  Virtual Consultation
                </a>
              </li>
            </ul>
          </nav>
        </aside>
        <main>
          <h1>Invoice</h1>
          <h3>Invoice list</h3>

          <div className="mainContainer">
            <div className="invoiceContainer">
              <div className="searchAndFilter">
                <span className="searchBox">
                  <input type="text" placeholder="Search by patient name" />
                  <span className="searchButton">
                    <Image
                      src={`/Line.svg`}
                      alt={`line`}
                      width="2"
                      height="16"
                      className="line"
                    />
                    <Image
                      src={`/Search.svg`}
                      alt={`searchIcon`}
                      width="12"
                      height="12"
                      className="search"
                    />
                  </span>
                </span>

                <span className="filterDate">
                  <span className="selectDate">Select Date:</span>
                  <Image
                    src={`/Line.svg`}
                    alt={`line`}
                    width="2"
                    height="16"
                    className="line"
                  />

                  <input type="text" id="date" placeholder="20 Aug" />

                  <Image
                    src={`/downArrow.svg`}
                    alt={`downArrow`}
                    width="12"
                    height="7"
                    className="arrow"
                  />
                </span>
              </div>

              <div className="invoiceListTable">
                <table>
                  <thead>
                    <tr>
                      <th>Patient</th>
                      <th>Time</th>
                      <th>Date</th>
                      <th>Total</th>
                      <th>
                        <span className="actionButton">Status</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>John Doe</td>
                      <td>09:00 - 10:30</td>
                      <td>22/08/2023</td>
                      <td>$180</td>
                      <td className="actionButton">
                        <a href="#" className="inProgressButton">
                          In Progress
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>John Doe</td>
                      <td>09:00 - 10:30</td>
                      <td>22/08/2023</td>
                      <td>$180</td>
                      <td className="actionButton">
                        <a href="#" className="completeButton">
                          Complete
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>John Doe</td>
                      <td>09:00 - 10:30</td>
                      <td>22/08/2023</td>
                      <td>$180</td>
                      <td className="actionButton">
                        <a href="#" className="canceledButton">
                          Canceled
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>John Doe</td>
                      <td>09:00 - 10:30</td>
                      <td>22/08/2023</td>
                      <td>$180</td>
                      <td className="actionButton">
                        <a href="#" className="completeButton">
                          Complete
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>John Doe</td>
                      <td>09:00 - 10:30</td>
                      <td>22/08/2023</td>
                      <td>$180</td>
                      <td className="actionButton">
                        <a href="#" className="completeButton">
                          Complete
                        </a>
                      </td>
                    </tr>
                    <tr className="active">
                      <td>John Doe</td>
                      <td>09:00 - 10:30</td>
                      <td>22/08/2023</td>
                      <td>$180</td>
                      <td className="actionButton">
                        <a href="#" className="completeButton">
                          Complete
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>John Doe</td>
                      <td>09:00 - 10:30</td>
                      <td>22/08/2023</td>
                      <td>$180</td>
                      <td className="actionButton">
                        <a href="#" className="completeButton">
                          Complete
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>John Doe</td>
                      <td>09:00 - 10:30</td>
                      <td>22/08/2023</td>
                      <td>$180</td>
                      <td className="actionButton">
                        <a href="#" className="completeButton">
                          Complete
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>John Doe</td>
                      <td>09:00 - 10:30</td>
                      <td>22/08/2023</td>
                      <td>$180</td>
                      <td className="actionButton">
                        <a href="#" className="completeButton">
                          Complete
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>John Doe</td>
                      <td>09:00 - 10:30</td>
                      <td>22/08/2023</td>
                      <td>$180</td>
                      <td className="actionButton">
                        <a href="#" className="completeButton">
                          Complete
                        </a>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colspan="5">
                        <a href="#" className="viewMoreButton">
                          View more
                        </a>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>

            <div className="invoicePreviewContainer">
              <div className="previewInvicePrint">
                <h3>Preview Invoice</h3>
                <div className="printerIcon">
                  <Image
                    src={`/printerIcon.svg`}
                    alt={`print`}
                    width="18"
                    height="18"
                  />
                </div>
              </div>

              <div className="invoicePreview">
                <Image src={`/logo.svg`} alt={`logo`} width="90" height="34" />
                <div className="summery">
                  <span>SUMMERY</span>
                  <hr />
                </div>
                <div className="doctorPatientName">
                  <span>Dr. Vihang</span>
                  <span>Jane Doe</span>
                </div>

                <div className="invoicePreviewTable">
                  <div className="listTable">
                    <table>
                      <thead>
                        <tr>
                          <th>Item</th>
                          <th>Rate</th>
                          <th>Qty</th>
                          <th>Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Vitamin A Night Serum</td>
                          <td>$90</td>
                          <td>2</td>
                          <td>$180</td>
                        </tr>
                        <tr>
                          <td>Vitamin A Night Serum</td>
                          <td>$90</td>
                          <td>2</td>
                          <td>$180</td>
                        </tr>
                        <tr>
                          <td>Vitamin A Night Serum</td>
                          <td>$90</td>
                          <td>2</td>
                          <td>$180</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="calcTable">
                    <table>
                      <tfoot>
                        <tr className="subTotalAmount">
                          <td>&nbsp;</td>
                          <td>&nbsp;</td>
                          <td>Subtotal</td>
                          <td>$540.00</td>
                        </tr>
                        <tr>
                          <td>&nbsp;</td>
                          <td>&nbsp;</td>
                          <td>Tax 5%</td>
                          <td>$00.00</td>
                        </tr>
                        <tr>
                          <td>&nbsp;</td>
                          <td>&nbsp;</td>
                          <td>Discount 10%</td>
                          <td>$00.00</td>
                        </tr>
                        <tr className="totalAmount">
                          <td>&nbsp;</td>
                          <td>&nbsp;</td>
                          <td>Total</td>
                          <td>$540.00</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>

                  <div className="notesTerms">
                    <h3>Notes/Terms</h3>
                    <p>Lorem ipsum dolor sit amet. Sit eaque assumenda qui.</p>
                  </div>
                </div>
              </div>

              <button className="createInvoiceBtn">Create New Invoice</button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
