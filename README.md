# Insurance for Gig Workers

---

## 1. The Problem

Gig workers in India like the people who deliver food for Zomato, Swiggy, Amazon and Zepto get paid for the work they do every day.. Sometimes things like heavy rain, really hot weather bad air or local rules can stop them from working. This means they can lose up to 30% of the money they would have made in a week.

Now there is no way for these workers to protect themselves from losing money because of things they cannot control. They have to take all the risk of not making money.

---

## 2. Who We Are Helping

The main people we want to help are delivery partners. These are people who work 8 to 12 hours a day get paid for each delivery they make and make between ₹4,000 and ₹8,000 every week. Their income depends on the weather. How well the delivery system is working.

Their main problems are:

* They cannot work when the weather is bad or when there are disruptions.

* They do not get any money when they cannot work.

* They need a way to protect their income that's simple, fast and easy to use.

What they need is a system that can protect their income every week with effort from them.

---

## 3. Our Solution

We are making a system that uses intelligence to help gig workers. This system is like an insurance plan that protects them from losing money when things outside of their control happen.

The system:

* Figures out the risk based on what's happening in the environment.

* Offers insurance plans that last for a week.

* Keeps watching what is happening in the world.

* Automatically starts the claim process when something disrupts the workers.

* Pays out the claims away.

* Has a way to detect and prevent fraud.

This system only focuses on helping workers when they lose income. It does not cover things like health, accidents or problems with their vehicles.

---

## 4. How the System Works

1. The user signs up. Logs in.

2. The system checks to make sure the user is a gig worker.

3. The system calculates a risk score for the user.

4. The system suggests an insurance plan for the week.

5. The user chooses a plan.

6. The system keeps watching the environment.

7. If something happens that stops the worker the system detects it.

8. The system automatically starts the claim process.

9. The system checks the claim using intelligence and fraud detection.

10. The system pays out the claim.

---

## 5. System Design and Implementation

### 5.1 Signing Up and Logging In

* The frontend of the system made with HTML and JavaScript collects the users information.

* The backend, made with Spring Boot handles the login and signup process.

* Passwords are stored securely using a method called BCrypt.

* The system has levels of access for admins and users.

---

### 5.2 Verifying Users

* The user gives the system information about the platform they work on and their location.

* The backend checks the location against a list of areas where deliveries are made.

* The system uses data to test if the user is really making deliveries.

* Only users who are verified can continue.

---

### 5.3 Calculating Risk

The system uses:

* How much it is raining

* The temperature

* The air quality

* Data from the past about when things got disrupted

To calculate the risk score it does this:

Risk Score = (0.4 x Rain). 0.3 X Temperature). 0.3 X Air Quality)

This gives a score between 0 and 1. It tells the system if the risk is low, medium or high.

---

### 5.4 Figuring Out the Price

The price of the insurance depends on the risk level:

* Low risk: ₹50 per week

* risk: ₹100 per week

* High risk: ₹150 per week

The system stores this information in the database.

---

### 5.5 Suggesting a Plan

The system calculates the expected loss based on the risk score and the users average weekly income. Then it suggests an insurance plan based on that.

---

### 5.6 Triggering a Claim

* The system has a scheduler that runs at times.

* It gets real-time data from weather and pollution APIs.

* If the data shows that something is disrupting the workers it triggers a claim.

---

### 5.7 Processing Claims

* The system can trigger claims automatically when it detects a disruption.

* It calculates the payout based on the policy.

* Users can also submit claims manually. The system checks them using environmental and activity data.

All claims are stored in the database and the system tracks their status.

---

### 5.8 Preventing Fraud

#### The Problem

One big risk in this kind of system is when users work together to claims. They might use GPS locations to make it seem like they are in a high-risk area.

#### Our Approach

The system does not just rely on GPS. It looks at how the user behaves to figure out if they are real or fake.

It uses a score called the Behavioral Consistency Score (BCS) which is based on:

* If the users location makes sense

* If their activity pattern is normal

* If their time consistency is good

* If their movement looks real

The system decides if a claim is valid or not based on the BCS and the disruption level.

---

#### Data Sources

The system uses:

1. Location data

2. Delivery activity data

3. Device signals

4. Network data

5. Crowd behavior analysis

---

#### Fraud Detection

The system uses:

* Rule-based anomaly detection

* A machine learning model called Isolation Forest

* Duplicate claim detection

* Location inconsistency checks

---

#### Handling Claims

The system has a three-tier validation process:

* Tier 1: Auto-approved claims

* Tier 2: flagged claims that need more verification

* Tier 3: Rejected claims that look like fraud

The system also protects users by allowing them to appeal. It has thresholds for network failures. It uses confidence-based scoring of strict rejection.

---

### 5.9 Payment Processing

* The system uses a payment system for testing.

* When a claim is validated the system updates the claim status to "approved”.

* The transaction is stored in the database.

---

## 6. Technical Architecture

The frontend is made with:

* HTML5

* CSS3

* JavaScript

The backend is made with:

* Spring Boot

* REST APIs

* Business logic services

The database is:

* PostgreSQL

The system has tables for:

* Users

* Policies

* Claims

* Transactions

* Risk profiles

It also integrates with:

* Weather API

* Pollution API

* Mock delivery platform data

---

## 7. Data Flow

1. The user puts in their information on the frontend.

2. The request is sent to the backend API.

3. The data is stored in the PostgreSQL database.

4. The system calculates the risk score.

5. The system gets data from external APIs.

6. The scheduler monitors for disruptions.

7. The system triggers a claim automatically.

8. The fraud detection module checks the claim.

9. The system processes the payment.

---

## 8. Handling Market Crashes

To stay financially stable:

* The system adjusts premiums based on risk levels.

* It has caps on payouts per user.

* It has thresholds for triggering claims.

* It pools risk across users.

* It keeps watching payouts versus collected premiums.

---

## 9. Following Constraints

* The system only covers income loss.

* It does not cover health, accidents or vehicle problems.

* It uses a pricing model.

---

## 10. Admin Dashboard

The dashboard has:

* Total users

* policies

* Claims processed

* Fraud alerts

* Financial analytics

The backend APIs provide the data and the frontend displays it.

---

## 11. Example

A delivery partner cannot work for three days because of rain.

The system:

* Detects the rain

* Finds the users

* Calculates the income loss

* Automatically triggers a claim

* Processes the payout

---

## 12. Future Plans

* Integrate with real delivery platform APIs

* Use advanced machine learning models

* Make a mobile application

* Use real-time payment systems like UPI

* Improve fraud detection with analytics

---

## 13. About the Project

### Inspiration

The growth of India’s gig economy and the lack of protection for delivery workers inspired this project.

---

### What it Does

The system provides automated income protection using intelligence and parametric insurance.

---

### How We Built It

We built it using HTML, CSS and JavaScript for the frontend Spring Boot for the backend, PostgreSQL for the database and Python-based AI models for risk and fraud detection.

---

### Challenges

* Handling fraud scenarios like GPS spoofing

* Integrating AI with the backend

* Designing real-time event triggers

* Ensuring fairness for users

---

### Accomplishments

* Complete end-to-end insurance workflow

* Automated. Payouts

* Strong anti-fraud system

* Real-world aligned pricing model

---

### What We Learned

* Parametric insurance systems

* Practical AI implementation

* Fraud detection techniques

* Backend system design

---

### What’s Next

* Deploy the system, in the world

* Improve AI accuracy

* Integrate with devices

* Make the infrastructure scalable
