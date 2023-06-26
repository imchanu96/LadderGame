package ladder;

public class Message {

	
	public void startMessage() {
		System.out.println("├┤ 사다리 게임 ├┤");
		System.out.println("인원수는 20명 제한입니다.");
		System.out.println("20초과 혹은 숫자 이외의 값일시 2명으로 고정 됩니다.");
	    System.out.print("참여 인원 수를 입력해주세요 => ");
	}
	
	public void selectWinPlayerMessage() {
		System.out.println("");
	    System.out.println("당첨의 수를 정해주세요");
	    System.out.println("입력을 원치 않으시거나 숫자를 제외한 ");
	    System.out.println("문자 입력의 경우 오류로 1로 고정됩니다. => ");
	}
	
	public void lineMessage() {
		System.out.println("-------------------------------");
	}

	public void announcementResult() {
		System.out.println("===========결과 발표 ===========");
		
	}
}
