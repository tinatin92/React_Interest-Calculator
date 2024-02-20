export default function UserInput({inputChange, userInput}) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            value={userInput.initialInvestment}
            onChange={(event) =>
                inputChange("initialInvestment", event.target.value)
            }
            type="number"
            required
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            value={userInput.annualInvestment}
            onChange={(event) =>
                inputChange("annualInvestment", event.target.value)
            }
            type="number"
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            value={userInput.expectedReturn}
            onChange={(event) => inputChange("expectedReturn", event.target.value)}
            type="number"
            required
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            value={userInput.duration}
            onChange={(event) => inputChange("duration", event.target.value)}
            type="number"
            required
          />
        </p>
      </div>
    </section>
  );
}
